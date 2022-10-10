/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar-color': '#0B1222',
        'blue-color': '#0284C7',

      },
    },

  },
  plugins: [require("daisyui")],
}
