import { cva } from "class-variance-authority";

export const iconButtonVariants = cva(
	"m-0 inline-flex items-center justify-center rounded-round border-none bg-none p-0 font-bold text-secondary-background outline-solid outline-2 outline-transparent hover:cursor-pointer hover:bg-white hover:outline-primary focus:bg-white focus:shadow-focus focus:outline-primary focus-visible:outline-4 disabled:cursor-not-allowed disabled:bg-none disabled:outline-transparent",
	{
		variants: {
			size: {
				small: ["lg:p-2.5 lg:*:size-5", "p-2 *:size-4", "active:shadow-active"],
				medium: [
					"lg:p-4 lg:*:size-6",
					"p-2.5 *:size-5",
					"active:shadow-active",
				],
				large: ["lg:p-5 lg:*:size-10", "p-4 *:size-8", "active:shadow-active"],
			},
		},
	},
);
