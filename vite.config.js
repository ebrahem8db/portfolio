import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  
  server: {
    allowedHosts: ['.ngrok-free.app', '.ngrok-free.dev', 'localhost'],
    host: true,
  },
})