import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Need this for docker to work
    port: 5173,
    watch: {
      usePolling: true // Need this for file watching to work in docker
    }
  }
})
