/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#458FF6',
        secondary: '#000',
        tertiary: '#7D7987',
        quaternary: '#1F1534',
      },
      fontFamily: {
        mulish: ['Mulish', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
