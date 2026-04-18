/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        display: ['"DM Sans"', '"Noto Sans JP"', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
      },
      colors: {
        brand: {
          cyan: '#22D3EE',
          indigo: '#6366F1',
          purple: '#A855F7',
          pink: '#EC4899',
          ink: '#0B0F17',
        },
      },
    },
  },
  plugins: [],
};
