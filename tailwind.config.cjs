/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			blue: '#1fb6ff',
			white: '#FFF',
			smoothBlack: '#333',
			marineBlue: '#374050',
			pink: '#ff49db',
			orange: '#FF6700',
			green: '#13ce66',
			grayDark: '#273444',
			gray: '#8492a6',
			grayLight: '#d3dce6',
			trasparent: 'transparent',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			lato: ['Lato', 'sans-serif'],
			expletus: ['Expletus Sans', 'cursive'],
			montserrat: ['Montserrat', 'cursive'],
		},
		extend: {
			spacing: {},
		},
	},
	plugins: [require('tailwindcss'), require('autoprefixer')],
};
