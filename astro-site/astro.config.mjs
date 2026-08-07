// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://deepakrj.com',
  base: '/',
  outDir: '../docs',
  integrations: [mdx()],
  redirects: {
    '/blog': '/writing/',
    '/about': '/',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
