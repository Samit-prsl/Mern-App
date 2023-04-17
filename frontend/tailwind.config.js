/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basicgreen: "#1aac83",
        jet: '#323031',
        eggshell: '#F4F1DE',
        cream: '#fffdd0',
        cosmicwhite: '#fff8e7'
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fatface: ["Abril Fatface", "cursive"],
        marcellus: ["Marcellus", "serif"],
        monoton: ["Monoton", "cursive"]
      }
    },
    screens: {
      phone: "360px",
      xs: "480px",
      sm: "768px",
      tablet: "914px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}
