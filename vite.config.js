import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CICD/',
  server : { 
    open: true,
    port: 3001, 
  }
})
