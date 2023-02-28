/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "768",
        md: "1060px"
      }
    },
  },
  plugins: [],
}
