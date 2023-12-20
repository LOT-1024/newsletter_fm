/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Tomato: 'hsl(4, 100%, 67%)',
        DarkSlateGray: 'hsl(234, 29%, 20%)',
        CharcoalGray: 'hsl(235, 18%, 26%)',
        CustomGray: 'hsl(231, 7%, 60%)',
        White: 'hsl(0, 0%, 100%)',
        FooterDefault: 'hsl(228, 45%, 44%)'
      }
    },
  },
  plugins: [],
}