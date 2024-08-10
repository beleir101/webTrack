/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx,js}",  './src/component/*.{html,js,tsx}',],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
}

