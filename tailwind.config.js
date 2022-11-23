/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        'box-margin-y': 'calc((100vh - var(--box-side-length)) / 2)',
        'box-side-double': 'calc(2 * var(--box-side-length))',
        'box-side': 'var(--box-side-length)',
        'box-1/11': 'calc(1 * (var(--box-side-length) / 11))',
        'box-2/11': 'calc(2 * (var(--box-side-length) / 11))',
        'box-3/11': 'calc(3 * (var(--box-side-length) / 11))',
        'box-4/11': 'calc(4 * (var(--box-side-length) / 11))',
        'box-5/11': 'calc(5 * (var(--box-side-length) / 11))',
        'box-7/11': 'calc(7 * (var(--box-side-length) / 11))',
        'box-8/11': 'calc(8 * (var(--box-side-length) / 11))',
        'box-9/11': 'calc(9 * (var(--box-side-length) / 11))',
      },
      borderRadius: {
        box: '100px',
      },
      minWidth: {
        'box-side': 'var(--box-side-length)',
      },
      minHeight: {
        'box-side': 'var(--box-side-length)',
      },
      fontFamily: {
        sans: ['Shrikhand'],
      },
      transitionDuration: {
        DEFAULT: `250ms`,
      },
      colors: {
        red: {
          500: '#ff5855',
        }
      },
      animation: {
        "slide-in-blurred-bottom": "slide-in-blurred-bottom 0.2s cubic-bezier(0.230, 1.000, 0.320, 1.000)   both"
      },
      keyframes: {
        "slide-in-blurred-bottom": {
          "0%": {
            transform: "translateY(200px) scaleY(2.5) scaleX(.2)",
            "transform-origin": "50% 100%",
            filter: "blur(40px)",
            opacity: "0"
          },
          to: {
            transform: "translateY(0) scaleY(1) scaleX(1)",
            "transform-origin": "50% 50%",
            filter: "blur(0)",
            opacity: "1"
          }
        }
      }
    },
  },
  plugins: [],
  //tailwind.config.js
}
