const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			current: "currentColor",
			transparent: "transparent",
			white: "hsl(0, 0%, 100%)",
			black: "hsl(0, 0%, 0%)",
			blackAlpha7: "hsla(0, 0%, 0%, 0.7)",
			blackAlpha26: "hsla(0, 0%, 0%, 0.26)",
			background: "hsl(225, 100%, 99%)",
			navbar: "hsla(158, 20%, 81%, 0.2)",
			primary: "hsl(183, 87%, 24%)",
			outlinePrimary: "hsla(183, 87%, 24%, 0.3)",
			secondaryBackground: "hsl(22, 89%, 40%)",
			secondaryNavbar: "hsl(17, 76%, 42%)",
			outlineSecondary: "hsla(22, 89%, 40%, 0.3)",
			tertiary: "hsl(158, 20%, 81%)",
			tertiaryHoveredField: "hsla(158, 20%, 81%, 0.6)",
			fernGreen: "hsl(103, 36%, 37%)",
			fernGreenUnderline: "hsla(103, 36%, 37%, 0.3)",
			text: "hsl(0, 0%, 21%)",
			textHint: "hsla(0, 0%, 21%, 0.8)",
			error: "hsl(0, 65%, 51%)",
			skeletonStart: "hsl(210, 38%, 95%)",
			skeletonEnd: "hsl(214, 20%, 69%)",
		},
		fontSize: {
			label: ["clamp(0.75rem, 1.3vw, 0.875rem)", 1.5],
			body: ["clamp(1.125rem, 1.5vw, 1.25rem)", 1.5],
			button: ["clamp(1rem, 1.5vw, 1.125rem)", 1.5],
			handwritten: ["clamp(2rem, 4vw, 2.5rem)", 1.5],
			heading1: ["clamp(1.75rem, 3vw, 2rem)", 1.5],
			heading2: ["clamp(1.25rem, 2vw, 1.5rem)", 1.5],
			heading3: ["clamp(1.25rem, 2vw, 1.5rem)", 1.5],
			subtitle: ["clamp(1rem, 1.5vw, 1.125rem)", 1.5],
		},
		borderRadius: {
			none: "0",
			input: "0.375rem 0.375rem 0 0",
			avatar: "3.125rem",
			pill: "999rem",
			round: "50%",
			DEFAULT: "0.375rem",
		},
		extend: {
			width: {
				viewport: "clamp(12rem, 33vw, 24rem)",
				indicator: "clamp(1rem, 4vw, 2.5rem)",
			},
			height: {
				sideLogo: "clamp(5rem, 16vw, 10rem)",
			},
			gap: {
				authorBlock: "clamp(1rem, 2vw, 1.25rem)",
			},
			boxShadow: ({ theme }) => ({
				input: `0 0.125rem 0 0 ${theme("colors.blackAlpha7")}`,
				inputFocus: `0 0.125rem 0 0 transparent`,
				focus: `0 0 0.375rem 0.125rem ${theme("colors.blackAlpha26")}`,
				focusLarge: `0 0 0.75rem 0.25rem ${theme("colors.blackAlpha26")}`,
				selected: `0 0 0.5rem 0.25rem ${theme("colors.blackAlpha26")}`,
				selectedLarge: `0 0 0.1rem 0.5rem ${theme("colors.blackAlpha26")}`,
				active: `0 0 0.375rem 0.25rem ${theme("colors.blackAlpha26")} inset`,
				activeLarge: `0 0 0.75rem 0.5rem ${theme("colors.blackAlpha26")} inset`,
				text: `0.125rem 0.125rem 0.25rem ${theme("colors.blackAlpha26")}`,
			}),
			keyframes: {
				appear: {
					from: { opacity: 0, transform: "translateY(0.625rem)" },
					to: { opacity: 1, transform: "translateY(0)" },
				},
			},
			animation: {
				appear: "400ms ease-in appear forwards",
			},
			zIndex: {
				1: "1",
			},
		},
	},
	plugins: [
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					"animation-delay": (value) => {
						return {
							"animation-delay": value,
						};
					},
				},
				{
					values: theme("transitionDelay"),
				},
			);
		}),
	],
};
