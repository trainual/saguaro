// Serves Storybook's MCP docs tools from a published Storybook's manifests,
// so no dev server is needed. Deployed to Cloud Run as storybook-mcp-saguaro;
// infra is in the terraform repo at trainual-ci/cloud_run/storybook_mcp.
//
// One handler per source at `/<id>/mcp`. No combined endpoint: @storybook/mcp's
// multi-source mode requires a `storybookId` argument it doesn't advertise.
import { createStorybookMcpHandler } from '@storybook/mcp';
import { serve } from 'srvx';

const PORT = Number(process.env.PORT ?? 8080);
const CACHE_TTL_MS = Number(process.env.MANIFEST_CACHE_TTL_SECONDS ?? 300) * 1000;

// [{ id, title, url }], set by Terraform.
const sources = JSON.parse(process.env.STORYBOOK_SOURCES ?? '[]');
if (sources.length === 0) {
  throw new Error('STORYBOOK_SOURCES must be a JSON array of at least one { id, title, url }');
}

// Cache manifests in memory. If a refresh fails, serve the stale copy.
const cache = new Map();

async function fetchManifest(url) {
  const cached = cache.get(url);
  if (cached && cached.expiresAt > Date.now()) return cached.body;

  let response;
  try {
    response = await fetch(url);
  } catch (error) {
    if (cached) return cached.body;
    throw new Error(`Could not reach ${url}: ${error.message}`);
  }

  if (!response.ok) {
    if (cached) return cached.body;
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  const body = await response.text();
  cache.set(url, { body, expiresAt: Date.now() + CACHE_TTL_MS });
  return body;
}

// Resolve manifest paths against the Storybook's origin, not this server's.
function manifestProviderFor({ url }) {
  const origin = url.replace(/\/+$/, '');
  return async (_request, path) =>
    fetchManifest(new URL(path.replace(/^\.\//, ''), `${origin}/`).toString());
}

const handlers = new Map(
  await Promise.all(
    sources.map(async (source) => [
      source.id,
      await createStorybookMcpHandler({ manifestProvider: manifestProviderFor(source) }),
    ]),
  ),
);

const routes = sources.map(({ id }) => `/${id}/mcp`);

serve({
  port: PORT,
  fetch: async (request) => {
    const { pathname } = new URL(request.url);

    if (pathname === '/healthz') {
      return Response.json({ ok: true, storybooks: sources.map(({ id }) => id) });
    }

    const match = /^\/([^/]+)\/mcp$/.exec(pathname);
    const handler = match && handlers.get(match[1]);
    if (handler) return handler(request);

    return new Response(`Not found. MCP endpoints: ${routes.join(', ')}\n`, { status: 404 });
  },
});

console.log(`storybook-mcp listening on ${PORT}; endpoints: ${routes.join(', ')}`);
