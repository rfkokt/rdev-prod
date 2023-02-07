const svgToDataUri = require('mini-svg-data-uri');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const {
    default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans, "")', ...defaultTheme.fontFamily.sans],
                mono: ['var(--font-mono, "")', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                rdark:"#0d1117",
                rdark_secondary : "#161b22",
                rdev: {
                    blue: {
                        400: "#4B56D2",
                        500: "#2D6FC8",
                        600: "#205295",
                    },
                },
                divider: {
                    light: colors.slate[200],
                    dark: colors.slate[800],
                },
            },
            animation: {
                'bounce-x': 'bounce-x 1s infinite',
            },
            keyframes: {
                'bounce-x': {
                    '0%, 100%': {
                        transform: 'translateX(25%)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
                    },
                    '50%': {
                        transform: 'translateX(0)',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                    },
                },
            },
        },
    },
    plugins: [
        function ({matchUtilities, theme}) {
            matchUtilities(
                {
                    'bg-grid': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}" stroke-dasharray="5 3" transform="scale(1, -1)"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                },
                {values: flattenColorPalette(theme('backgroundColor')), type: 'color'}
            );
        },
        require('@headlessui/tailwindcss'),
        require('tailwindcss-accent')({
            colors: ['violet', 'blue'],
            root: 'violet',
        }),
    ],
};
