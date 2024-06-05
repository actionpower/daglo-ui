/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
      fontSize: {
        '12-r': [
          '0.75rem',
          {
            lineHeight: '1rem',
            fontWeight: '400',
          },
        ],
        '12-m': [
          '0.75rem',
          {
            lineHeight: '1rem',
            fontWeight: '500',
          },
        ],
        '12-b': [
          '0.75rem',
          {
            lineHeight: '1rem',
            fontWeight: '600',
          },
        ],
        '14-r': [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '400',
          },
        ],
        '14-m': [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '500',
          },
        ],
        '14-b': [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '600',
          },
        ],
        '16-r': [
          '1rem',
          {
            lineHeight: '1.375rem',
            fontWeight: '400',
          },
        ],
        '16-m': [
          '1rem',
          {
            lineHeight: '1.375rem',
            fontWeight: '500',
          },
        ],
        '16-b': [
          '1rem',
          {
            lineHeight: '1.375rem',
            fontWeight: '600',
          },
        ],
        '24-r': [
          '1.5rem',
          {
            lineHeight: '1.875rem',
            fontWeight: '400',
          },
        ],
        '24-m': [
          '1.5rem',
          {
            lineHeight: '1.875rem',
            fontWeight: '500',
          },
        ],
        '24-b': [
          '1.5rem',
          {
            lineHeight: '1.875rem',
            fontWeight: '600',
          },
        ],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
};
