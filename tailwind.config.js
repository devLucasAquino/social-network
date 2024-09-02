/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "default": "linear-gradient(to left, #025bff, #104bdd, #123dbc, #0f2e9c, #09217e, #031d6c, #00185a, #001349, #00133c, #00112e, #000d20, #000711);",
        "default-btn": "linear-gradient(to right top, #051937, #001a45, #001a52, #001a5e, #00176a);"
      }
    },
  },
  plugins: [],
}

