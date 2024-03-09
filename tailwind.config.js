/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          '45': 'rgba(0, 0, 0, 0.45);',
          '88': 'rgba(0, 0, 0, 0.88);',
          'full': 'rgba(0, 0, 0);'
        }
      }
    },
  },
  plugins: [],
}

