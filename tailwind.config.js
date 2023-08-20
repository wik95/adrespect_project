/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    screens: {
      'sm': {'min': '360px', 'max': '600px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '601px', 'max': '1279px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1280px', 'max': '1920px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

    },
  },
  variants: {
    extend: {
      display: ['group-focus']
    },
  },
  plugins: [],
}

