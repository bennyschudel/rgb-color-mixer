import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import BundleSize from 'vite-plugin-bundlesize';

// https://vite.dev/config/
export default defineConfig({
  base: '/rgb-color-mixer',
  build: {
    sourcemap: 'hidden',
    chunkSizeWarningLimit: 200,
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
    BundleSize({
      stats: 'all',
      limits: [
        {
          name: "**/*",
          limit: "200 kB"
        },
      ],
    }),
  ],
});
