const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            scrollMargin: {
              'header': '4rem', // Adjust this value based on the height of your fixed menu
            },
            backgroundImage: {
                gradientA: 'linear-gradient(to bottom, #2560A8 0%, #22beeb 15% 60%, #73D2F4 100%)',
            },
            colors: {
                neutral: colors.neutral,
                socialBlue: '#1e5db2',
                purple: 'rgb(128, 0, 128)',
                footerGrey: '#909191'
            },
            fontFamily: {
                openSans: ['Open Sans', 'Helvetica Neue', 'Arial', ...defaultTheme.fontFamily.sans],
                sans: ['Raleway', 'Helvetica Neue', 'Arial', ...defaultTheme.fontFamily.sans],
                serif: ['Noto Serif', 'Georgia', 'serif', ...defaultTheme.fontFamily.serif],
                FiraSansCondensed: ['Fira Sans Condensed', 'Arial Narrow', 'Avenir Next Condensed', ...defaultTheme.fontFamily.serif],
            },
            boxShadow: {
              'text': '0 2px 0 rgba(0, 0, 0, 0.5)',
            }
        }
    },
    variants: {
      extend: {
        scrollMargin: ['responsive'],
        backgroundColor: ['hover'], // Enable hover variants for backgroundColor
      },
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#2bdcd2',
                    'primary-content': '#171717',
                    secondary: '#016968',
                    info: '#2bdcd2',
                    'info-content': '#171717',
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
