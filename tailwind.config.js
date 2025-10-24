/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": ['"Work Sans"', "sans-serif"],
      },
      screens: {
        xs: "420px",
        "3xl": "1920px",
      },
      backgroundColor: {
        primary: "#A53DFF",
        "primary-dark": "#8431CC",
        "primary-light": "#EDD8FF",
        secondary: "#DA4DF1",
        background: "#f8f9fa",
        CTA: "#132238",
      },
      textColor: {
        primary: "#A53DFF",
        "gary-light": "#424E60",
      },
      borderColor: {
        primary: "#A53DFF",
      },
      boxShadow: {
        "hero-image": "0 5px 15px rgba(0,0,0,0.3)",
        // 'circle': "0 0 10px red",
        circle: "0 0 196px 60px #DA4DF1",
      },
    },
  },
  plugins: [],
};
