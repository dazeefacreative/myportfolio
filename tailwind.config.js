/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: "#f3ffed",
        secondary: "#79c152",
        body: "#F7F7F5",
        dark: "#222222",
        veryDark:"#101915"
      },
      fontFamily:{
        heading: "Abril Fatface, serif",
        body: "Mulish, arial, sans-serif"
      }
    },
  },
  plugins: [],
};
