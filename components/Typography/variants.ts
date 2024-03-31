import { cva } from "class-variance-authority";

export const headingVariants = cva("m-0 block font-[inherit]", {
	variants: {
		variant: {
			h1: ["text-heading1 font-bold"],
			h2: ["text-heading2 font-semibold"],
			h3: ["text-heading3 font-medium"],
			subtitle: ["inline-block text-subtitle font-bold"],
			handwritten: ["whitespace-nowrap text-handwritten font-normal"],
		},
		color: {
			default: ["text-text"],
			secondary: ["text-secondaryBackground"],
			white: ["text-white"],
		},
		align: {
			center: ["text-center"],
			right: ["text-right"],
			left: ["text-left"],
		},
	},
	defaultVariants: {
		color: "default",
		align: "center",
	},
});
