/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true,
  theme: {
    colors: {
      'dark-blue': "#0f141a",
    },
    fontFamily: {
      'roboto': ['Roboto Mono', 'sans-serif'],
    },
    textColor: {
      'primary': '#ebebec',
      'yellow': '#ffd200',
      'gray': '#5b5c63',
      'blue': '#26C6DA'
    }
  },
  plugins: [],
}
