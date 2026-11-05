# Storybook MCP server

Serves Storybook's MCP docs tools for the published Saguaro Storybook
(https://saguaro-storybook.s3.amazonaws.com/index.html),
so designers and agents can look up components without running
`yarn storybook`.

- Endpoint: `/saguaro/mcp` (plus `/healthz`)
- Tools: `list-all-documentation`, `get-documentation`,
  `get-documentation-for-story`

It reads the `manifests/` files the Storybook build publishes to S3 and caches
them for 5 minutes, so docs changes show up without redeploying this server.

## Run locally

```bash
cd tools/storybook-mcp
npm install
STORYBOOK_SOURCES='[{"id":"saguaro","title":"Saguaro","url":"https://saguaro-storybook.s3.amazonaws.com"}]' npm start
claude mcp add --transport http saguaro-docs-local http://localhost:8080/saguaro/mcp
```

## Deploy

`.github/workflows/storybook_mcp.yml` deploys to the `storybook-mcp-saguaro` Cloud
Run service on merges to `main` that change this directory. The service is
defined in the terraform repo at `trainual-ci/cloud_run/storybook_mcp`.

The trainual repo runs its own copy for its Storybook.
