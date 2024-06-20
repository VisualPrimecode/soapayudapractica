const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': "linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
            },
            colors: {
                neutral: colors.neutral,
                socialBlue: '#1e5db2',
                purple: 'rgb(128, 0, 128)',
                footerGrey: '#909191'
            },
            fontFamily: {
                sans: ['Helvetica Neue', 'Arial', 'Inter', ...defaultTheme.fontFamily.sans],
                serif: ['Georgia', 'serif'],
            },
            boxShadow: {
              'text': '0 2px 0 rgba(0, 0, 0, 0.5)',
            }
        }
    },
    variants: {
      extend: {
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
