import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User site (manav2109.github.io) is served at the root, so base is '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    host: '127.0.0.1',
    open: false,
  },
  preview: {
    port: 5173,
    host: '127.0.0.1',
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2020',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
