import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
const { PUBLIC_SEO_URL, PUBLIC_BASE_PATH } = loadEnv(import.meta.env.MODE, process.cwd(), '');

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: PUBLIC_SEO_URL,
  base: PUBLIC_BASE_PATH,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
