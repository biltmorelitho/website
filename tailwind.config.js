/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: 'class',
  theme: {
    screens: {
      xs: "376px",
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    letterSpacing: {
      tightest: "-0.5em"
    },
    extend: {
      colors: {
        "primary": "#1976D2",
        "primary-dark": "#1565C0",
        "background": "#FFFFFF",
        "gray-light": "#F5F5F5",
        "gray-medium": "#757575",
        "text": "#212121",
        "blue-light": "#BBDEFB",
        "blue-lighter": "#E3F2FD",
      },
      fontFamily: {
        sans: ['Karla', 'Arial', 'Helvetica', 'sans-serif', 'Georgia', 'serif'],
        raj: ['Rajdhani', 'Arial', 'Helvetica', 'sans-serif', 'Georgia', 'serif'],
        roboto: ['Roboto', 'Arial', 'Helvetica', 'sans-serif', 'Georgia', 'serif'],
      },
      transitionProperty: {
        main: 'all 150ms ease-out'
      },
      animation: {
        glow: 'glow 1s ease-in-out infinite alternate',
        disco: 'disco 2s ease-in-out infinite',
        blink: 'blink 4.2s infinite'
      },
      boxShadow: {
        'custom': '0px 10px 10px rgba(0, 0, 0, 0.4)',
        'custom-hover': '0px 20px 20px rgba(0, 0, 0, 0.4)',
      },
      keyframes: {
        glow: {
          '0%': { 'text-shadow': '0 0 2px #fff, 0 0 4px #fff, 0 0 6px #415ce3, 0 0 8px #415ce3, 0 0 10px #415ce3, 0 0 12px #415ce3, 0 0 14px #415ce3' },
          '100%': { 'text-shadow': '0 0 6px #fff, 0 0 8px #4de6ff, 0 0 10px #4de6ff, 0 0 12px #4de6ff, 0 0 14px #4de6ff, 0 0 16px #4de6ff, 0 0 18px #4de6ff' },
        },
        disco: {
          '20%, 24%, 55%': {
            color: '#111',
            'text-shadow': 'none'
          },
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            color: '#fff6a9',
            'text-shadow': '0 0 5px #ffa500, 0 0 9px #ffa500, 0 0 17px #ffa500, 0 0 1px #ffa500, 0 0 6px #ff0000, 0 0 10px #ff8d00, 0 0 11px #ff0000'
          }
        },
        blink: {
          '0%': {color: 'inherit'},
          '49%': {color: 'inherit'},
          '60%': {color: 'transparent'},
          '85%': {color: 'inherit'},
          '100%': {color: 'inherit'}
        }
      }
    },
  },
  plugins: [],
}
