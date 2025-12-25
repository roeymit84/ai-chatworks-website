// DESTINATION: /tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#8b5cf6',
          purpleDark: '#7c3aed',
          purpleLight: '#ddd6fe',
          dark: '#111827',
          gray: '#374151',
          slate: '#64748b',
          bg: '#ffffff',
          surface: '#f9fafb',
          border: '#e5e7eb',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        display: ['Open Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
