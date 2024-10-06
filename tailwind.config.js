import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        success: 'var(--aw-color-success)',
        warning: 'var(--aw-color-warning)',

        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        cinzel: ['Cinzel Variable', 'serif'],
      },
      backgroundImage: {
        'custom-svg': "url('./src/assets/images/trees4.svg')",
        'custom-svg2': "url('./src/assets/images/trees5.svg')",
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
