// postcss.config.js
// Este arquivo será tratado como um Módulo ES devido ao "type": "module" no package.json
export default {
  plugins: {
    tailwindcss: {}, // Sem 'require' aqui, o PostCSS resolve o plugin pelo nome
    autoprefixer: {}, // Sem 'require' aqui
  },
};