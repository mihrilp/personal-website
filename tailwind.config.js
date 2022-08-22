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
      'yellow': '#ffd200',
      'gray': '#5b5c63'
    },
    fontFamily: {
      'roboto': ['Roboto Mono', 'sans-serif'],
    },
    textColor: {
      'primary': '#ebebec',
    }
  },
  plugins: [],
}
