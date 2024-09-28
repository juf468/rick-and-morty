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
        colorBorder: "#adff2f",
        colorText: "#ffffff",
        colorButtonOrange:"#ffa500",
        colorButtonCancel:"#d2691e",
        colorButtonGreen:"#9acd32",
        colorBlack:"#000",
        colorButtonFavorite:"#0fbf0f",
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

