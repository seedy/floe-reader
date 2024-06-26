import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"m-0 inline-flex h-[2.125rem] w-full min-w-20 max-w-80 items-center justify-center rounded border-none bg-none px-6 py-1 text-center font-[inherit] text-button font-bold uppercase outline outline-[0.125rem] outline-transparent focus-visible:outline-[0.375rem] lg:w-auto lg:max-w-none lg:grow-0",
	{
		variants: {
			variant: {
				contained: [
					"text-background hover:text-white focus:text-white focus:shadow-focusLarge focus-visible:shadow-focusLarge active:text-white active:shadow-activeLarge",
				],
				outlined: [
					"outline outline-[0.125rem] outline-transparent hover:bg-white focus:bg-white focus:shadow-focusLarge focus-visible:shadow-focusLarge active:bg-white active:shadow-activeLarge",
				],
				link: [
					"normal-case outline-transparent focus:underline focus-visible:underline active:text-opacity-70 active:underline",
				],
			},
			color: {
				primary: ["outline-outlinePrimary"],
				secondary: ["outline-outlineSecondary"],
			},
		},
		compoundVariants: [
			{
				variant: "contained",
				color: "primary",
				className: "bg-primary",
			},
			{
				variant: "contained",
				color: "secondary",
				className: "bg-secondaryBackground",
			},
			{
				variant: "outlined",
				color: "primary",
				className: "text-primary",
			},
			{
				variant: "outlined",
				color: "secondary",
				className: "text-secondaryBackground",
			},
			{
				variant: "link",
				color: "primary",
				className: "text-primary outline-transparent",
			},
			{
				variant: "link",
				color: "secondary",
				className: "text-secondaryBackground outline-transparent",
			},
		],
	},
);
