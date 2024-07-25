const { blue } = require('color-name')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
    theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/pattern-curve.svg')",
        'footer-texture': "url('/images/pattern-quotes.svg')",
      },
      backgroundSize: {
        '80px': '80px',
      },
      backgroundPosition: {
        'top-center': 'top center',
      },
      fontSize: {
        'xxs': '.7rem', // Özel font boyutu tanımı
      },
      fontSizes: {
        DarkBlue:'var(--Dark-Blue)',
        GrayishBule: 'var(--Grayish-Blue)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

