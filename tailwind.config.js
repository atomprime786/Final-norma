/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        //just add this below and your all other tailwind colors willwork
        ...colors
      },
      margin: {
        '450': '450px',
      }
    },
  },
  plugins: [],
}