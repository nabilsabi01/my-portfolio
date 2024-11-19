/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8accff',
          400: '#4eb0ff',
          500: '#2990ff',
          600: '#1a71f5',
          700: '#1559e3',
          800: '#1747b8',
          900: '#193f91',
        },
        secondary: {
          50: '#f4f7fb',
          100: '#e9eff7',
          200: '#d8e2f0',
          300: '#bccce2',
          400: '#99aed0',
          500: '#7a91bc',
          600: '#6275a7',
          700: '#526090',
          800: '#465177',
          900: '#3d4563',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};