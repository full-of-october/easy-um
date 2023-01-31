/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resources/**/*.{html,js,php,twig}"],
  theme: {
    extend: {
      screens: {
        xl: '1200px',
        '2xl': '1200px',
      },
      container: {
        center: true,
        screens: {
          xl: '1200px',
          '2xl': '1200px',
        },
        padding: {
          DEFAULT: '12px',
        },
      },

      colors: {
				red: {
          light: '#F52525',
          dark: '#D20B0B',
        },
        blue: {
          light: '#337CFC',
          dark: '#004FD9',
        },
        black: {
          4: '#4F4F4F',
          2: '#252525',
        }
			},
			fontSize: {
				h1: '72px',
				h2: '42px',
				h3: '25px',
				h4: '20px',
				h5: '15px',
				h6: '12px',
			},

      fontFamily: {
        golos: ['Golos', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};