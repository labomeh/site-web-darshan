import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      // Mock Next.js components for Ladle
      'next/image': path.resolve(__dirname, './.ladle/NextImage.tsx'),
      'next/link': path.resolve(__dirname, './.ladle/NextLink.tsx'),
    },
  },
  define: {
    'process.env': process.env,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    css: true,
  },
});
