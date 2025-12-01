import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ica_bolt/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
