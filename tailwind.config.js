const { color } = require("framer-motion");

module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        fontFamily: {
          monument: ['Monument', 'sans-serif'],
        },
        colors:{
         rufus: "#F35C7A"
        }
       },
    },
    plugins: [],
  }