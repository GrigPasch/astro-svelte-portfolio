// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['en', 'gr'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true
    }
},
  integrations: [tailwind(), svelte()]
});