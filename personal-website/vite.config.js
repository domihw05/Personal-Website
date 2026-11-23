import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { letterboxdFeedPath, letterboxdProfile } from './src/data/letterboxd'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      [letterboxdFeedPath]: {
        target: new URL(letterboxdProfile).origin,
        changeOrigin: true,
        rewrite: () => new URL('rss/', letterboxdProfile).pathname,
      },
    },
  },
})
