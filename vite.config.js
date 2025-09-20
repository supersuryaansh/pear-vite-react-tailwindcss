import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  minify: false,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/index.html'),
      external: ['events', 'stream', 'util']
    }
  },
  resolve: {
    alias: {
      events: false,
      stream: false,
      util: false,
    }
  },
  optimizeDeps: {
    exclude: ['events', 'stream', 'util']
  },
  server: {
    port: 5173,
    open: false
  },
  base: './'
})
