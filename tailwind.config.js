/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#38bdf8',
        'accent-hover': '#0ea5e9',
        bg: '#18181b',
        text: '#fff',
        muted: '#a3a3a3',
        'card-bg': '#232326',
        border: '#27272a',
        'footer-bg': '#111',
        'footer-text': '#fff',
        'footer-muted': '#bbb',
      },
      fontFamily: {
        'poppins': ['Poppins', 'Inter', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
} 