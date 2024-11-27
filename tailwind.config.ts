import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './react/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        light: 'var(--light)',
        centerLight: 'var(--centerLight)',
        darkCard: 'var(--darkCard)',
        import: 'var(--import)',
        darkBackground:'var(--darkBackground)'
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
