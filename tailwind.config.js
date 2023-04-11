/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "rotate-in-ver": "rotate-in-ver 15.0s linear  infinite  both"
      },
      keyframes: {
        "rotate-in-ver": {
          "0%": {
              transform: "rotateY(-360deg)",
              opacity: "1"
          },
          to: {
              transform: "rotateY(0deg)",
              opacity: "1"
          }
        }
      }
    },
    backgroundImage:{
      'cat': "url('../public/back_img.jpg')",
    }
  },
  plugins: [],
}