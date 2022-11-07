/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true,
  theme: {
    colors: {
      'dark-gray': "#0f141a",
      'gray': '#253241'
    },
    fontFamily: {
      'roboto': ['Roboto Mono', 'sans-serif'],
    },
    textColor: {
      'white': '#f8f9fa',
      'light': '#ced4da',
      'yellow': '#ffd200',
      'gray': '#5b5c63',
      'blue': '#26C6DA'
    }
  },
  plugins: [],
}
