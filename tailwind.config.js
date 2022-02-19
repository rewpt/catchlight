module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      backgroundImage: {
        'margin-pattern': "url('/src/images/bright-squares.png')",
      },
      height: {
        '30%': "30%"
      },
      scale: {
        '120': '1.2',
      },
      colors: {
        logo: '#75424A',
        sender: '#3FF4D5',
        receiver: '#ff7d94',
        chatbg1: '#0F2027',
        chatbg2: '#203A43',
        chatbg3: '#2C5364',
        'chat-topic': '#2f77ad',
        'send-btn': "#3ea1ed"
      }
    },
  },
  plugins: [],
}
