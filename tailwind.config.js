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
      colors: {
        primary: "#A53DFF",
        "gary-light": "#424E60",
      },
      borderColor: {
        primary: "#A53DFF",
      },
      boxShadow: {
        "hero-image": "0 5px 15px rgba(0,0,0,0.3)",
        circle: "0 0 196px 60px #DA4DF1",
        custom: "0 5px 16px -2px rgba(0,0,0,0.2)",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        appear: {
          "0%": {
            opacity: "0",
            "clip-path": "inset(100% 0 0 0)",
          },
          "100%": {
            opacity: "1",
            "clip-path": "inset(0 0 0 0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-200px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0px)",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "0",
            transform: "translateX(200px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0px)",
          },
        },
        flowerOpen: {
          "0%": {
            transform: "scale(0.2) rotate(0deg)", // Start small and unrotated
            opacity: "0",
          },
          "100%": {
            transform: "scale(1) rotate(0deg)", // Settle at full size and final position
            opacity: "1",
          },
        },
        "slide-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-left-fast": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-top": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-bottom": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "circle-Open": {
          "0%": {
            opacity: "0",
            "clip-path": "circle(0% at 50% 50%)",
          },
          "100%": {
            opacity: "1",
            "clip-path": "circle(100% at 50% 50%)",
          },
        },
      },
      animation: {
        appear: "appear 4s forwards",
        fadeIn: "fadeIn linear 2s",
        fadeOut: "fadeOut linear 2s",
        flowerOpen: "flowerOpen 2s forwards",
        "slide-left": "slide-left 2s forwards", // Adjust duration as needed
        "slide-right": "slide-right 2s forwards", // Adjust duration as needed
        "slide-left-fast": "slide-left-fast forwards",
        "slide-bottom": "slide-bottom 2s forwards",
        "circle-open": "circle-Open 2s forwards",
        "slide-top": "slide-top 2s forwards",
        "spin-slow": "spin 7s linear infinite", // Adjust the duration (5 seconds)
        // "animation-timeline": "view()",
        // "animation-range": " entry 0% cover 40%",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        /* Hide scrollbar */
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none",
        },

        /* Scroll animation */
        ".scroll-animate": {
          animationTimeline: "view()",
          animationRange: "entry 0% cover 30%",
        },
      };

      // Add utilities with responsive and hover variants
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
