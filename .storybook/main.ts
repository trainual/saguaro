import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  // Keep .mdx first: storySort keeps a category's pages in this order, so
  // its Guide sorts before its stories.
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    'storybook-dark-mode',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: { mdxCompileOptions: { remarkPlugins: [remarkGfm] } },
      },
    },
    '@storybook/addon-mcp'
  ],

  docs: {
    defaultName: 'Guide',
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  }
};
export default config;
