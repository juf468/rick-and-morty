/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        colorBorderForm: "#adff2f",
        colorButtonLogin:"#ffa500",
        colorButtonCancel:"#d2691e",
        colorButtonFavorite:"#0fbf0f",
        colorButtonTitle:"#9acd32",
        colorWhite: "#fff",
        colorBlack:"#000",
      },
      fontFamily:{},
      scale: {
        '140': '1.4',
      },
      rotate: {
        '360': '360deg',
      },
    }
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}

