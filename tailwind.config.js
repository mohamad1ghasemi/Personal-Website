/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mainColor-1": "#F5F5F5",
        "mainColor-2": "#005C7B",
        "mainDark-1": "#0A192F",
        "mainDark-2": "#ABA944",
        "whiteColor-1": "#ccd6f6",
        "whiteColor-2": "#A5ABBD",
        "grayColor-1": "#808697 ",
        "grayColor-2": "#3C4251 ",

      },
    },
  },
  plugins: [],
}

