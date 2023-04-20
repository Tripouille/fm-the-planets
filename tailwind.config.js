/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        stars: "url('/assets/background-stars.svg')",
      },
      colors: {
        white: "#FFFFFF",
        black: "#070724",
        gray: {
          dark: "#38384F",
          base: "#838391",
        },
        blue: {
          base: "#2D68F0",
          light: "#419EBB",
          lightest: "#DEF4FC",
        },
        yellow: "#EDA249",
        orange: {
          dark: "#D14C32",
          base: "#CD5120",
        },
        purple: "#6F2ED6",
        red: "#D83A34",
        teal: "#1EC2A4",
        mercury: "#419EBB",
        venus: "#EDA249",
        earth: "#6D2ED5",
        mars: "#D14C32",
        jupiter: "#D83A34",
        saturn: "#CD5120",
        uranus: "#1EC1A2",
        neptune: "#2D68F0",
      },
      fontFamily: {
        antonio: ["var(--font-antonio)", ...fontFamily.sans],
        spartan: ["var(--font-spartan)", ...fontFamily.sans],
      },
      animation: {
        "planet-slide-in": "planet-slide-in 0.5s ease-out",
      },
      keyframes: {
        "planet-slide-in": {
          "0%": { transform: "translate(-100%, -25%) scale(0.5)" },
          "100%": { transform: "translate(0%, 0%) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
