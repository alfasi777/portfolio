import { Noto_Sans, Outfit, Ovo } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHower: '#2a004a',
        darkTheme: '#221c4d',
      },
      fontFamily:{
        Outfit: ["Outfit","sans-serif"],
        Ovo: ["Ovo","serif"],
        Noto_Sans: ["Noto_Sans","sans-serif"],
      }
    },
    boxShadow: {
      'black' : '1px 0.5px #000',
      'white' : '2px 1px #fff',
    },
    gridTemplateColumns: {
      'auto':'repeat(auto-fit,minmax(200px, 1fr))'
    }
  },
  darkMode: 'selector',
  plugins: [],
};
