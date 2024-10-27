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
        darkCard: 'var(--darkCard)',
      },
      fontFamily: {
        raleway: ['var(--font-raleway)', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
        jetBrains: ['var(--font-jet-brains)', 'sans-serif'],
      },
      maxWidth: {
        container: '75rem', // Добавляем кастомный размер
      },
    },
    container: {
      center: true,
      padding: '1rem', // Добавляем отступы по бокам (px-4)
    },
  },
  plugins: [],
};
export default config;
