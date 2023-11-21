import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `./assets/[name].js`,
        assetFileNames: `./assets/[name].[ext]`
      },
    },
  },
  plugins: [
    react(),
  ],
});
