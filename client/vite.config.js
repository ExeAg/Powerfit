import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/socket.io': { //------ El chat ----------
        target: 'ws://localhost:4000',
        ws: true,
      },
    }
  }
})
