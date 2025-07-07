/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'mainb': '#3148D2',
      },
      screens: {
        'lg': '1025px',
        'xl': '1281px', // Altera o breakpoint 'lg' para 1025px
      },
    },
  },
  plugins: [],
}