import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './react/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        light: 'var(--light)',
        centerLight: 'var(--centerLight)',
      },
      fontFamily: {
        raleway: ['var(--font-raleway)', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
      },
      maxWidth: {
        container: '1170px', // Добавляем кастомный размер
      },
    },
  },
  plugins: [],
};
export default config;
