/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true,
  theme: {
    colors: {
      darkblue: "#0f141a",
      gray: "#253241",
    },
    fontFamily: {
      roboto: ["Roboto Mono", "sans-serif"],
    },
    textColor: {
      white: "#f8f9fa",
      gray: "#5b5c63",
      lightgray: "#ced4da",
      yellow: "#ffd200",
      blue: "#00bfff",
      orange: "#FFC8B4",
      green: "#98ff98",
    },
    borderColor: {
      orange: "#FFC8B4",
    },
  },
  plugins: [],
};
