// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://gustavomartins83.github.io',
  base: isProd ? '/portfolio/' : '/',
  server: {
    host: true
  },
  preview: {
    host: true
  },
  vite: {
    plugins: [tailwindcss()]
  }
});