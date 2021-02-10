module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark": "#36393f",
        "dark-secondary": "#2f3136",
        "dark-tertiary": "#26282b",
        "dark-tertiary-alt": "#2b2d30",
        "light": "#f3f4f6",
        "light-secondary": "#f3f4f6",
        "light-tertiary": "#e5e7eb",
        "argo-blue": "#0096db",
        "argo-blue-secondary": "#0081bd"
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  plugins: [],
};