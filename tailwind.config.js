/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#0B0D17',
        'second-color': '#D0D6F9',
        'third-color': '#FFFFFF',
        'shadow-sphere': 'rgba(255, 255, 255, 0.2)',
        'nav-bg': 'rgba(151, 151, 151, 0.2)'
      },
      fontFamily: {
        bellefair: ["Bellefair", ...defaultTheme.fontFamily.sans],
        barlowCondensed: ['Barlow Condensed', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}