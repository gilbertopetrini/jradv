// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react() // Keep the React plugin
  ],
  // Add PostCSS configuration here for Tailwind CSS
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'), // Make sure tailwindcss is installed as a dev dependency (it is!)
        require('autoprefixer'), // Make sure autoprefixer is installed as a dev dependency (it is!)
      ],
    },
  },
});