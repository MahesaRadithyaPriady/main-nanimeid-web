/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      colors: {
        night: {
          950: '#111116',
          900: '#1b1b21',
          800: '#24242c',
          700: '#303039',
          600: '#3a3a45',
        },
        brand: {
          50: '#eef1ff',
          100: '#dde3ff',
          200: '#c2cdff',
          300: '#a9b8ff',
          400: '#8da2ff',
          500: '#718bff',
          600: '#5b74f2',
          700: '#4a5ecc',
          800: '#3b4ba6',
          900: '#2e3b80',
        },
        accent: {
          400: '#ff5c8a',
          500: '#ff3d75',
        },
      },
    },
  },
  plugins: [],
}
