import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  
  ],
  server: {
    port: 5173,     // 👈 FIXED PORT
    strictPort: true // 👈 fail if port is busy
  }
})
