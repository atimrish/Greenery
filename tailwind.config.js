/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#E8ECE8',
      'lightgreen': '#D9E1D5',
      'gray': '#B4B8B2',
      'yellow': '#A88C1B',
      'green': '#627A50',
      'darkgreen': '#445547',
      'black': '#2C302D'

    },
    extend: {},
  },
  plugins: [],
}

