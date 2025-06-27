// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePluginGhPages } from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [react(), vitePluginGhPages()]
})