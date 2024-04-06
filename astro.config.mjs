import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  site: 'https://dartsense.com',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
  },
  integrations: [react(), tailwind(), astroI18next()],
});
