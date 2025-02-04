import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "Syne",],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#0D0D0D",
        white: colors.white,
        primary: {
          light: "#FEEFEA",
          "light-hover": "#FDE6E0",
          "light-active": "#FBCCBE",
          normal: "#F15B2D",
          "normal-hover": "#D95229",
          "normal-active": "#C14924",
          dark: "#B54422",
          "dark-hover": "#91371B",
          "dark-active": "#6C2914",
          darker: "#542010",
        },
        secondary: {
          light: "#E6ECEF",
          "light-hover": "#D9E3E8",
          "light-active": "#B0C5CF",
          normal: "#014463",
          "normal-hover": "#013D59",
          "normal-active": "#01364F",
          dark: "#01334A",
          "dark-hover": "#01293B",
          "dark-active": "#001F2D",
          darker: "#001823",
        },
        base: {
          light: "#E9E9E9",
          "light-hover": "#DEDEDE",
          "light-active": "#848484",
          normal: "#242424",
          "normal-hover": "#353535",
          "normal-active": "#1D1D1D",
          dark: "#1B1B1B",
          "dark-hover": "#161616",
          "dark-active": "#101010",
          darker: "#0D0D0D",
        },
        info: {
          default: "#2257BE",
          success: "#17B530",
          warning: "#FAA41A",
          danger: "#F73B3B",
          light: "#F2F2F2",
          dark: "#BBBBBB",
          "danger-light": "#FFCCBC",
          "danger-dark": "#F15B2D",
          "warning-light": "#FFECBC",
          "warining-dark": "#FAA41A",
          "secondary-light": "#A6E2E2",
          "secondary-dark": "#29BDBF",
          "secondary-active": "#0786C0",
          "secondary-darker": "#014463",
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
    
  ],
};