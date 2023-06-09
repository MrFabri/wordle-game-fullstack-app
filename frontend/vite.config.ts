import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../backend/build'
  },
  server: {
    // Proxy config for the backend (only for development)
    proxy: {
      '/api': {
        target: 'http://localhost:5080/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/highscore': {
        target: 'http://localhost:5080/highscore',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/highscore/, ''),
      }
    }
  },
  resolve: {
    alias: {
      // Path alias
      "@src": resolve(__dirname, "./src/"),
      "@game": resolve(__dirname, "./src/game/"),
      '@components': resolve(__dirname, "./src/components/"),
      '@interfaces': resolve(__dirname, "./src/interfaces/"),
      '@services': resolve(__dirname, "./src/services/"),
    }
  }
})
