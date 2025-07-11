/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      keyframes: {
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.018)' },
        }
      },
      animation: {
        'scale-pulse': 'scalePulse 1s ease-in-out infinite',
      },
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