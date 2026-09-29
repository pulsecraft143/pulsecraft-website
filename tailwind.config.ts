import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FF2A2A',
          'red-hover': '#E62020',
          'red-light': '#FFF0F0',
          'red-glow': 'rgba(255, 42, 42, 0.15)',
          'red-subtle': 'rgba(255, 42, 42, 0.08)',
        },
        dark: {
          void: '#0B0B0D',
          pure: '#000000',
          surface: '#141416',
          card: '#1A1A1E',
          elevated: '#202026',
          border: '#27272A',
          muted: '#3F3F46',
        },
        light: {
          bg: '#FAFAFA',
          surface: '#FFFFFF',
          card: '#F4F4F5',
          border: '#E4E4E7',
          subtle: '#F8F9FA',
        },
        text: {
          darkHeading: '#FFFFFF',
          darkBody: '#A1A1AA',
          darkMuted: '#71717A',
          lightHeading: '#09090B',
          lightBody: '#52525B',
          lightMuted: '#71717A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['var(--font-heading)', 'Manrope', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-left': 'marqueeLeft 30s linear infinite',
        'marquee-right': 'marqueeRight 30s linear infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-33.333%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
