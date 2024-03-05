/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        Mainbg: "#22212b",
      },
      spacing: {
        10: "2rem",
        35: "3.5rem",
        udemy: "30rem"
      },
    },
  },
  plugins: [],
}

