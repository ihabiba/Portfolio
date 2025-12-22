/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#66023C',
          hover: '#3D0124', 
        },
        secondary: {
          DEFAULT: '#A3678A',
        },
        tertiary: {
          DEFAULT: '#3D0124',
        },
        tint: {
          DEFAULT: '#F2E9EE',
        },
        // RENAMED 'background' -> 'canvas' to fix the crash
        canvas: {
          light: '#FFFFFF',
          alt: '#FAFAFA',    
          dark: '#111827',   
          darkAlt: '#1f2937' 
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280', 
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937', 
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}