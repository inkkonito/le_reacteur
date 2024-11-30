/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lbc_orange: '#ec5a12',
        lbc_grey_light: '#F4F9FE',
        lbc_black: '#152233',
        lbc_orange_pale: '#ffe9de',
        lbc_grey: '#627c93',
        lbc_grey_med: '#e6eaee',
        lbc_blue_dark: '#094171',
        lbc_brown: '#89380f',
        lbc_green: '#4e9850',
      },
    },
  },
  plugins: [],
}
