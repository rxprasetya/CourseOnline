/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#1F7CFF',
        'secondary-color': '#F5F6FB',
        'primary-text': '#000000',
        'secondary-text': '#575455',
        'third-text': '#979797',
      },
      fontFamily: {
        'poppins': 'Poppins',
        'ubuntu' : 'Ubuntu',
      },
      fontSize: {
        'heading1': 40,
        'heading2': 32,
        'heading3': 24,
        'text': 14,
      },
    },
  },
  plugins: [],
}

