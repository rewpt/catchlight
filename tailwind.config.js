module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'margin-bg-pattern': "url('/src/images/bright-squares.png')",
        'main-bg-pattern': "url('./src/images/tweed.png')"
      }
    },
  },
  plugins: [],
}
