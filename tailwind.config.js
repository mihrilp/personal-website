/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: true,
  theme: {
    colors: {
      darkblue: "#0f141a",
      gray: "#253241",
    },
    fontFamily: {
      mono: ["var(--font-roboto-mono)"],
    },
    textColor: {
      white: "#f8f9fa",
      gray: "#5b5c63",
      lightgray: "#adb5bd",
      yellow: "#ffd200",
      blue: "#00bfff",
      orange: "#FFC8B4",
      green: "#98ff98",
      purple: "#b892ff",
    },
    borderColor: {
      gray: "#343a40",
    },
  },
  plugins: [],
};
