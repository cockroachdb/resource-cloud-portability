import { defineConfig } from 'astro/config';
// import { loadEnv } from 'vite';
// const { PUBLIC_SEO_URL, PUBLIC_BASE_PATH } = loadEnv(import.meta.env.MODE, process.cwd(), '');

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.cockroachlabs.com/resources/resource-cloud-portability/',
  base: '/resources/resource-cloud-portability',
  build: {
    assetsPrefix: '/resources/resource-cloud-portability',
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
