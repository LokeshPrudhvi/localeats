/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:   '#1A1A1A',  // near-black for text & dark sections
          orange: '#E8531A',  // primary accent — warm restaurant orange
          green:  '#1B4332',  // deep forest green (navbar & buttons)
          cream:  '#FAFAF7',  // off-white page background
          warm:   '#F4EFE6',  // warmer beige for alternating sections
          amber:  '#F5A623',  // star ratings
          mid:    '#8B5A3C',  // warm brown for third testimonial avatar
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      height: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}
