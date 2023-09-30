/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				dorado: '#D5B183',
				crema: '#E1D7CB',
				naranja: '#A65D4F',
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				juliusSansOne: ['Julius Sans One', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
