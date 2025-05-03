import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

import eslint from 'vite-plugin-eslint';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import BundleSize from 'vite-plugin-bundlesize';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command, mode }) => {
  return {
    build: {
      sourcemap: 'hidden',
      lib: {
        entry: resolve(__dirname, './src/main.js'),
        name: 'RgbColorMixer',
        formats: ['es'],
      },
      chunkSizeWarningLimit: 200,
      minify: false,
      terserOptions: {
        compress: false,
        mangle: false,
      },
      rollupOptions: {
        output: {
          entryFileNames() {
            return '[name].js';
          },
        },
        external: [/^lit([-/].)*/, /^color-.*/, 'spectral.js'],
      },
    },
    plugins: [
      eslint(),
      viteStaticCopy({
        targets: [
          {
            src: 'src/**/*.d.ts',
            dest: 'types',
          },
        ],
      }),
      BundleSize({
        stats: 'all',
        limits: [
          {
            name: '**/*',
            limit: '200 kB',
          },
        ],
      }),
    ],
  };
});
