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
        },
        yellow: "#EDA249",
        orange: {
          dark: "#D14C32",
          base: "#CD5120",
        },
        purple: "#6F2ED6",
        red: "#D83A34",
        teal: "#1EC2A4",
      },
      fontFamily: {
        "antonio": ["var(--font-antonio)", ...fontFamily.sans],
        "spartan": ["var(--font-spartan)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
