//tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      maxWidth:{
        'res': '800px'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom-glow': '0 0 25px var(--main-color), 0 0 50px var(--main-color), 0 0 100px var(--main-color)',
      },
    },
  },
  plugins: [
require('daisyui'),
],
}