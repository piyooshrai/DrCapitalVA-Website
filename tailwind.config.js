/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'teal-deep': '#0C3B3B',
        'teal-mid': '#1A5C5C',
        'teal-light': '#2A8A8A',
        'teal-accent': '#3DB5AD',
        'warm-white': '#FDF9F4',
        'warm-cream': '#F5EDE3',
        'warm-sand': '#E8DDD0',
        'coral-accent': '#D4856A',
        'text-primary': '#1A1A1A',
        'text-secondary': '#5A5A5A',
        'text-muted': '#8A8A8A',
      },
      fontFamily: {
        serif: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '11px',
        'xs': '12px',
        'sm': '13px',
        'base': '16px',
        'lg': '17px',
        'xl': '18px',
        '2xl': '20px',
        '3xl': ['clamp(32px, 3.5vw, 48px)', { lineHeight: '1.15' }],
        '4xl': ['clamp(42px, 5vw, 68px)', { lineHeight: '1.08' }],
        '5xl': ['clamp(32px, 4vw, 48px)', { lineHeight: '1.15' }],
      },
      spacing: {
        '4.5': '1.125rem',
      },
      borderRadius: {
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        'soft': '0 2px 4px rgba(0,0,0,0.04)',
        'md-healthcare': '0 40px 80px rgba(12,59,59,0.08), 0 2px 4px rgba(0,0,0,0.04)',
        'lg-healthcare': '0 20px 60px rgba(12,59,59,0.08)',
        'sm-healthcare': '0 12px 40px rgba(0,0,0,0.08)',
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'reveal': 'reveal 0.7s ease forwards',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'reveal': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
