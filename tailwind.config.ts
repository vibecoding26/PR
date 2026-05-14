import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E8231A',
          gold: '#F5E500',
          dark: '#0A0A0A',
          charcoal: '#141414',
          surface: '#1A1A1A',
          muted: '#6B7280',
          light: '#F8F8F8',
        },
      },
    },
  },
  plugins: [],
};

export default config;
