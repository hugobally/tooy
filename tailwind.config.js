/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        'box-margin-y': '20vh',
        'box-side-double': '120vh',
        'box-side': '60vh',
        'box-2/11': '10.91vh',
        'box-3/11': '16.36vh',
        'box-4/11': '21.82vh',
        'box-7/11': '38.18vh',
        'box-8/11': '43.64vh',
        'box-9/11': '49.09vh',
      },
      borderRadius: {
        box: '100px',
      },
      minWidth: {
        'box-side': '60vh',
      },
      minHeight: {
        'box-side': '60vh',
      },
      fontFamily: {
        sans: ['Dosis'],
      },
      transitionDuration: {
        DEFAULT: `250ms`,
      },
    },
  },
  plugins: [],
}
