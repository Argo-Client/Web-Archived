module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				dark: "#36393f",
				"dark-secondary": "#2f3136",
				"dark-tertiary": "#202225",
			},
		},
	},
	variants: {
		extend: {
			display: ["dark"],
		},
	},
	plugins: [],
};
