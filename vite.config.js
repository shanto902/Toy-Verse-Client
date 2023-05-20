import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define : {
    '__VITE_PREFER_THEME__': '""' 
  }
})
