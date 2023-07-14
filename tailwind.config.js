/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/css/style.html',
    './src/front/js/pages/**/*.{html,js}',
    './src/front/js/component/**/*.{html,js}',
    './template.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        newyorkfont: ['UnifrakturCook', 'cursive']
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
