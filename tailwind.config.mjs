/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F6F1E8',
        clay: '#D8BCA6',
        cocoa: '#3C2E2A',
        ember: '#C35A3F',
        moss: '#5B6A5B',
        blush: '#F1C5B6',
        night: '#201716'
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Instrument Sans"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px -40px rgba(32, 23, 22, 0.6)'
      },
      backgroundImage: {
        'hero-wash': 'radial-gradient(120% 120% at 10% 20%, rgba(241, 197, 182, 0.55) 0%, rgba(246, 241, 232, 0.2) 50%, rgba(214, 191, 167, 0.25) 100%)'
      }
    }
  },
  plugins: []
};
