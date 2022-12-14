/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlack: "#151515",
        littleBitBlack: "#242424",
        goodGreen: "#4EE1A0",
        errorRed: "#FF6F5B",
        notSoDeepBlack: "#D9D9D9",
        totalWhite: "#FFF",
      },
      backgroundImage: {
        
      },
      screens: {
        'xs': '375px',
        // => @media (min-width: 375px) { ... }

        'sm': '768px'
        // => @media (min-width: 600px) { ... }
      }
    },
  },
  plugins: [],
}
