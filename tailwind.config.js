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
      brightness: {
        135: '1.35',
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
        sender: '#3FF4D5',
        receiver: '#ff7d94',
        chatbg1: '#0F2027',
        chatbg2: '#203A43',
        chatbg3: '#2C5364',
        'chat-topic': '#33c0c4',
        'send-btn': "#3ea1ed",
        logo: '#191B1E',
        searchmain: '#282c30',
        pagebackground: '#191B1E',
        navbar: '#FCC201',
        pagetxt: '#FCC201',
        logotxt: '#191B1E',
        notificationcolor: '#02ab07',
        topborder: '#191B1E',
        inputbg: '#191B1E',
        inputtext: '#a2a2a3' 
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
