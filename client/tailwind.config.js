/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Reemplaza 'Roboto' con la fuente que estás usando
      },
      aspectRatio:{
        '4/3': '4/3',
      },
    },
  },
  plugins: [],
};


