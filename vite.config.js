import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': 'http://superheroapi.com/api/2549584731885304'
    }
  },
  plugins: [react()],
  build: {
    commonjsOptions: { transformMixedEsModules: true } // Change
  }
})
