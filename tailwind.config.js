/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f8f8f8',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b4b4b4',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#1a1a1a',
        },
        accent: {
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
        }
      },
      fontFamily: {
        'sans': ['Calibri', 'Lato', 'Source Sans Pro', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Isocpeur', 'Georgia', 'Times New Roman', 'serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'slideUp': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};