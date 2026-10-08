import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    'storybook-dark-mode',
    '@storybook/addon-docs',
    '@storybook/addon-mcp'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  features: {
    // Writes storybook-static/manifests/ during a build, which is what the
    // hosted MCP server reads (terraform: trainual-ci/cloud_run/storybook_mcp).
    // addon-mcp's preset turns this on too, but the deployed artifact should
    // not depend on an addon side effect. Costs ~2s a build here.
    componentsManifest: true,
  }
};
export default config;
