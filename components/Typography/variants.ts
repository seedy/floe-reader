import { cva } from "class-variance-authority";

const COLOR_VARIANTS = {
	default: ["text-text"],
	secondary: ["text-secondaryBackground"],
	white: ["text-white"],
};

export const textVariants = cva(
	"m-0 block font-[inherit] text-body text-text",
	{
		variants: {
			color: COLOR_VARIANTS,
		},
		defaultVariants: {
			color: "default",
		},
	},
);

export const headingVariants = cva("m-0 block font-[inherit]", {
	variants: {
		variant: {
			h1: ["text-heading1 font-regular"],
			h2: ["text-heading2 font-semibold"],
			h3: ["text-heading3 font-medium"],
			subtitle: ["inline-block text-subtitle font-bold"],
			handwritten: ["whitespace-nowrap text-handwritten font-normal"],
		},
		color: COLOR_VARIANTS,
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
