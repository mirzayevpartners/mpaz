import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        mainGreen: '#02363A',
        secondGold: '#D09E5F',
        paleGold: '#ECE8D9',
        secondText: '#8A8D8A',
        myGray: '#EAF0F5',
        newsText: '#3F464E',
        bgGray: '#F8F8F8',
        inputBorder: '#CCD0DD',
        paleBlue: '#77829D',
        borderGray: '#DCE4EC',
        textBlue: '#022D58',
        grayishBg: '#FDFDFD',
        paleGold2: '#E0BF8C',
      },
      screens: {
        800: { max: '800px' },
        900: { max: '900px' },
        450: { max: '450px' },
        500: { max: '500px' },
        600: { max: '600px' },
        // min500: { min: '500px' },
        min450: { min: '450px' },
        400: { max: '400px' },
        700: { max: '700px' },
        1240: { max: '1240px' },
        1000: { max: '1000px' },
        1080: { max: '1080px' },
        1750: { min: '1750px' },
        1400: { max: '1400px' },
        min400: { min: '400px' },
        min500: { min: '500px' },
        min600: { min: '600px' },
        min700: { min: '700px' },
        min800: { min: '800px' },
        min900: { min: '900px' },
        min1080: { min: '1080px' },
        min1400: { min: '1400px' },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
