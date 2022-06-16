/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens:{
        "sm": "480px"
      },
      spacing:{
        "big": '44rem'
      },
      fontFamily:{
        nunito:['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}
