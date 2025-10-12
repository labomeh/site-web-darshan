import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ═══════════════════════════════════════════════════════════════
      // COULEURS (basées sur design-tokens.css)
      // ═══════════════════════════════════════════════════════════════
      colors: {
        // Couleurs principales
        primary: {
          DEFAULT: '#C9A961',  // Or spirituel
          light: '#D4B87A',
          dark: '#B08F40',
        },
        secondary: {
          DEFAULT: '#0A1E2E',  // Bleu nuit profond
          light: '#1A3A4F',
          dark: '#051119',
        },
        accent: {
          DEFAULT: '#D4B87A',  // Or clair
          light: '#E5D1B3',
          dark: '#C9A961',
        },

        // Couleurs neutres
        white: '#FFFFFF',
        'off-white': '#FAF9F7',
        'light-gray': '#E8E6E3',
        gray: '#B5B3B0',
        'dark-gray': '#4A4A4A',
        black: '#2C2C2C',

        // Couleurs sémantiques
        success: '#7A9B76',
        info: '#8B9DAB',
        warning: '#C9A66B',
        error: '#A67B75',
      },

      // ═══════════════════════════════════════════════════════════════
      // TYPOGRAPHIE
      // ═══════════════════════════════════════════════════════════════
      fontFamily: {
        logo: ['Medula One', 'serif'],
        headings: ['Libre Baskerville', 'serif'],
        body: ['Outfit', 'sans-serif'],
      },

      fontSize: {
        // Desktop (> 1024px) - défaut
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.5px', fontWeight: '300' }],
        'h2': ['36px', { lineHeight: '1.3', letterSpacing: '-0.25px', fontWeight: '400' }],
        'h3': ['28px', { lineHeight: '1.4', fontWeight: '500' }],
        'h4': ['22px', { lineHeight: '1.4', fontWeight: '500' }],
        'h5': ['18px', { lineHeight: '1.5', fontWeight: '500' }],
        'h6': ['16px', { lineHeight: '1.5', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.7', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.6', fontWeight: '400' }],
      },

      // ═══════════════════════════════════════════════════════════════
      // ESPACEMENT (système basé sur 8px)
      // ═══════════════════════════════════════════════════════════════
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },

      // ═══════════════════════════════════════════════════════════════
      // LAYOUT
      // ═══════════════════════════════════════════════════════════════
      maxWidth: {
        'container': '1200px',
        'content': '800px',
      },

      // ═══════════════════════════════════════════════════════════════
      // BORDER RADIUS
      // ═══════════════════════════════════════════════════════════════
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'round': '9999px',
      },

      // ═══════════════════════════════════════════════════════════════
      // OMBRES (SHADOWS)
      // ═══════════════════════════════════════════════════════════════
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'xl': '0 16px 48px rgba(0, 0, 0, 0.16)',
        'primary': '0 4px 12px rgba(201, 169, 97, 0.3)',
        'secondary': '0 4px 12px rgba(10, 30, 46, 0.3)',
      },

      // ═══════════════════════════════════════════════════════════════
      // TRANSITIONS
      // ═══════════════════════════════════════════════════════════════
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
      },

      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out': 'cubic-bezier(0.0, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
      },

      // ═══════════════════════════════════════════════════════════════
      // Z-INDEX
      // ═══════════════════════════════════════════════════════════════
      zIndex: {
        'base': '1',
        'dropdown': '100',
        'sticky': '200',
        'fixed': '300',
        'modal-backdrop': '400',
        'modal': '500',
        'popover': '600',
        'tooltip': '700',
      },

      // ═══════════════════════════════════════════════════════════════
      // BREAKPOINTS (personnalisés)
      // ═══════════════════════════════════════════════════════════════
      screens: {
        'mobile': '320px',
        'mobile-lg': '480px',
        'tablet': '640px',
        'tablet-lg': '1024px',
        'desktop': '1280px',
        'desktop-lg': '1536px',
      },

      // ═══════════════════════════════════════════════════════════════
      // ANIMATIONS
      // ═══════════════════════════════════════════════════════════════
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          'from': {
            opacity: '0',
          },
          'to': {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
