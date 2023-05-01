/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		container: {
			center: true,
			screens: {
				sm: '330px',
				md: '768px',
				lg: '500px',
				xl: '800px',
				'2xl': '1000px',
			},
			// padding: {
			//   DEFAULT: '20px',
			//   sm: '20px',
			//   md: '60px',
			//   lg: '100px',
			//   xl: '100px',
			//   '2xl': '140px',
			// },
		},
		extend: {
			backdropBlur: {
				xs: '2px',
			},
			fontFamily: {
				bolton: ['var(--font-bolton)', ...fontFamily.sans],
				archia: ['var(--font-archia)', ...fontFamily.sans],
			},
			colors: {
				pinpoint: {
					DEFAULT: '#F1F152',
				},
				wisdom: {
					DEFAULT: '#AFB9B4',
				},
				black: {
					DEFAULT: '#1F2725',
				},
				experience: {
					DEFAULT: '#D4DCD8',
				},
			},
		},
	},
};
