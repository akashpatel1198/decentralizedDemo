/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./build/**/*.{js}', './client/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        first: '#48D741',
        second: '#077801',
        third: '#943BF7',
        fourth: '#380075'
      }
    },
  },
  plugins: [],
}
