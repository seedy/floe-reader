import { cva } from "class-variance-authority";

export const iconButtonVariants = cva(
	"m-0 inline-flex items-center justify-center rounded-round border-none bg-none p-0 font-bold text-secondary-background outline-solid outline-[0.125rem] outline-transparent hover:cursor-pointer hover:bg-white hover:outline-primary focus:bg-white focus:shadow-focus focus:outline-primary focus-visible:outline-[0.25rem] disabled:cursor-not-allowed disabled:bg-none disabled:outline-transparent",
	{
		variants: {
			size: {
				small: ["p-4 *:size-4 active:shadow-active"],
				medium: ["p-6 *:size-8 active:shadow-active"],
				large: ["p-10 *:size-16 active:shadow-active-large"],
			},
		},
	},
);
