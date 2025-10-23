import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      '@classes': fileURLToPath(new URL('./src/classes', import.meta.url)),
      '@css': fileURLToPath(new URL('./src/css', import.meta.url)),
    },
  },
  server: {
    allowedHosts: ['www.emilrundberg.se'],
  },
  base: '/',
})
