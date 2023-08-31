import node from '@astrojs/node';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://dartsense.com',
  integrations: [react(), tailwind()],
  adapter: node({
    mode: 'standalone',
  }),
});
