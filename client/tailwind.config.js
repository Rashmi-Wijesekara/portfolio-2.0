/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				fontLightBlue: "#AEFEFF",
				darkBlue: "#35858B",
				white: "#FFFFFF",
				bgDark: "#072227",
				lightPara: "#ADC6CB",
				boxBg: "#00454A",
				btnBg: "#52C2CA",
			},
			fontFamily: {
				poppins: ["Poppins"],
			},
		},
	},
	plugins: [],
};
