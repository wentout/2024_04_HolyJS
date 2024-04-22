import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3030,
    strictPort: true
  },
  preview: {
    port: 8080,
    strictPort: true
  },
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    chunkSizeWarningLimit: 2048
  },
  plugins: [
    react(),
  ],
})
