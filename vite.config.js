import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Portfolio_webiste",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animation: ['framer-motion', 'lottie-react'],
          utils: ['@emailjs/browser', 'emailjs-com', 'react-hot-toast'],
          icons: ['react-icons']
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
})
