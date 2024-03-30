import { cva } from "class-variance-authority";

export const headingVariants = cva(
	"m-0 block text-center font-[inherit] text-text",
	{
		variants: {
			variant: {
				h1: ["text-heading1 font-bold"],
				h2: ["text-heading2 font-semibold"],
				h3: ["text-heading3 font-medium"],
				subtitle: ["inline-block text-subtitle font-bold"],
				handwritten: ["whitespace-nowrap text-handwritten font-normal"],
			},
		},
	},
);
