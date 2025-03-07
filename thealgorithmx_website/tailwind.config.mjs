/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
      },
      screens: {
        xxs: "360px",
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "2560px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
        helveticaneue: ['Helvetica Neue', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        glock: ['Glock', 'sans-serif'], 
      },
      
      colors: {
        'semi-white': 'rgba(255, 255, 255, 0.5)',
        'semii-white': 'rgba(255, 255, 255, 0.6)',
        'nav-bar-text':'rgba(255, 255, 255, 0.8)',
        'dark': '#0f0f0f',
        
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
