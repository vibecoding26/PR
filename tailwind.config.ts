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
          bg: '#0A0A0A',
          surface: '#111111',
          'surface-2': '#1A1A1A',
          border: '#2A2A2A',
          'border-subtle': '#1E1E1E',
          'text-primary': '#FFFFFF',
          'text-secondary': '#A0A0A0',
          'text-muted': '#505050',
          gold: '#C9A84C',
          'gold-light': '#E8C878',
          'gold-dark': '#9A7B35',
          'gold-subtle': 'rgba(201,168,76,0.12)',
          'white-overlay': 'rgba(255,255,255,0.04)',
        },
      },
    },
  },
  plugins: [],
};

export default config;
