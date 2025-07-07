// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react() // Mantenha o plugin do React
  ],
  // Não precisa do bloco 'css.postcss' aqui se você estiver usando um postcss.config.js
});