module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'margin-pattern': "url('/src/images/bright-squares.png')",
      },
      height: {
        '30%': "30%"
      }
    },
  },
  plugins: [],
}
