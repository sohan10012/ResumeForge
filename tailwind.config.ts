import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        tahoma: ['Tahoma', 'sans-serif'],
      },
      colors: {
        'royal-blue': {
          DEFAULT: '#0a2463',
          '50': '#e6eaf3',
          '100': '#c2cae1',
          '200': '#9aa7cd',
          '300': '#7284b9',
          '400': '#5468a9',
          '500': '#364d99',
          '600': '#2a4691',
          '700': '#1e3d85',
          '800': '#12347a',
          '900': '#0a2463',
        },
        'imperial-red': {
          DEFAULT: '#fb3640',
          '50': '#fee8e9',
          '100': '#fec5c8',
          '200': '#fd9fa4',
          '300': '#fc7980',
          '400': '#fc5c64',
          '500': '#fb3640',
          '600': '#fa3039',
          '700': '#f92830',
          '800': '#f92228',
          '900': '#f8161b',
        },
        'davys-gray': {
          DEFAULT: '#605f5e',
          '50': '#efeeed',
          '100': '#d6d5d3',
          '200': '#bbbab7',
          '300': '#a09e9b',
          '400': '#8b8987',
          '500': '#767472',
          '600': '#6e6c6a',
          '700': '#63615f',
          '800': '#595755',
          '900': '#484644',
        },
        'cerulean': {
          DEFAULT: '#247ba0',
          '50': '#e8f1f5',
          '100': '#c5dde6',
          '200': '#9ec7d7',
          '300': '#77b1c7',
          '400': '#5aa0bb',
          '500': '#3d8fb0',
          '600': '#3782a9',
          '700': '#2f719f',
          '800': '#286195',
          '900': '#1b4483',
        },
        'platinum': {
          DEFAULT: '#e2e2e2',
          '50': '#fcfcfc',
          '100': '#f8f8f8',
          '200': '#f3f3f3',
          '300': '#eeeeee',
          '400': '#eaeaea',
          '500': '#e6e6e6',
          '600': '#e2e2e2',
          '700': '#dbdbdb',
          '800': '#d7d7d7',
          '900': '#cecece',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideDown': 'slideDown 0.3s ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;