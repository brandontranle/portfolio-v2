import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),viteCompression({
    algorithm: 'brotliCompress',
    filter: (assetFileName) => assetFileName.endsWith('.js') || assetFileName.endsWith('.css'),
  })],
  build: {
    outDir: 'dist/client',
    rollupOptions: {
      input: '/src/main.tsx'
    }
  },
  ssr: {
    noExternal: ['react', 'react-dom']
  }
});