/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				fontLightBlue: "#AEFEFF",
				darkBlue: "#35858B",
				white: "#FFFFFF",
			},
			fontFamily: {
				'poppins': ['Poppins'],
			}
		},
	},
	plugins: [],
};
