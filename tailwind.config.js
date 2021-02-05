module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark": "#36393f",
        "dark-secondary": "#2f3136",
        "dark-tertiary": "#202225",
        "light": "#f3f4f6",
        "light-secondary": "#f3f4f6",
        "light-tertiary": "#e5e7eb"
      }
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  plugins: [],
}
