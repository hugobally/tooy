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
        'box-2/12': '10vh',
        'box-4/12': '20vh',
        'box-8/12': '40vh',
        'box-10/12': '50vh',
      }
    },
    borderRadius: {
      'box': '100px',
    },
    minWidth: {
      'box-side': '60vh',
    },
    minHeight: {
      'box-side': '60vh',
    },
    fontFamily: {
      'sans': ['Dosis'],
    },
  },
  plugins: [],
}
