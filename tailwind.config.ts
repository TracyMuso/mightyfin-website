/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: "#653191",
          100: "#EDCCFF",
          200: "#A152CC",
          300: "#793D99",
          400: "#531773",
          500: "#410064",
          600: "#1B0129",
        },
        pink: {
          100: "#FFBBB8",
          200: "#FF180E",
        },
        yellow: {
          50: "#FFF2CC",
          100: "#FFE599",
          200: "#FFD866",
          300: "#FFCB33",
          400: "#FFC10D",
        },
        gray: {
          100: "#878787",
          200: "#4E4E4E",
          300: "#1E1D1D",
          400: "#606060",
          500: "#656565",
        },
        green: {
          100: "#A4D498",
          200: "#21A501",
        },
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      lineHeight: {
        10: "1rem",
        11: "2rem",
        12: "3rem",
        14: "4rem",
        16: "5rem",
        18: "6rem",
      },
      fontSize: {
        xs: "0.7rem",
        sm: "0.85rem",
        m: "0.9375rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.6rem",
        "3xl": "2.1rem",
        "4xl": "2.7rem",
        "5xl": "3.3rem",
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        bold: "600",
        extrabold: "700",
        "extra-bold": "700",
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "1.75rem",
      },
    },
  },
};
export {};
