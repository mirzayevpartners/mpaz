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
        400: { max: '400px' },
        450: { max: '450px' },
        500: { max: '500px' },
        550: { max: '550px' },
        600: { max: '600px' },
        700: { max: '700px' },
        800: { max: '800px' },
        900: { max: '900px' },
        1000: { max: '1000px' },
        1080: { max: '1080px' },
        1240: { max: '1240px' },
        1400: { max: '1400px' },
        1750: { min: '1750px' },
        min300: { min: '300px' },
        min400: { min: '400px' },
        min450: { min: '450px' },
        min500: { min: '500px' },
        min550: { min: '550px' },
        min600: { min: '600px' },
        min650: { min: '650px' },
        min700: { min: '700px' },
        min800: { min: '800px' },
        min850: { min: '850px' },
        min900: { min: '900px' },
        min1000: { min: '1000px' },
        min1080: { min: '1080px' },
        min1200: { min: '1200px' },
        min1240: { min: '1240px' },
        min1250: { min: '1250px' },
        min1300: { min: '1300px' },
        min1400: { min: '1400px' },
        min1500: { min: '1500px' },
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
