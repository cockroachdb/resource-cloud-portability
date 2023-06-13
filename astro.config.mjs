import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import react from '@astrojs/react';

const { PUBLIC_SEO_URL, PUBLIC_BASE_PATH } = loadEnv(import.meta.env.MODE, process.cwd(), '');

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: PUBLIC_SEO_URL,
  base: PUBLIC_BASE_PATH,
  integrations: [
    react(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
  vite: {
    assetsInclude: ['**/*.riv'],
  },
});
