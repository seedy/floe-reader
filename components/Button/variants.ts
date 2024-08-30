import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"m-0 inline-flex min-h-[2.125rem] min-w-20 max-w-80 items-center justify-center rounded border-none bg-none px-6 py-1 text-center font-body text-button font-bold uppercase outline outline-[0.125rem] outline-transparent focus-visible:outline-[0.375rem] lg:w-auto lg:max-w-none lg:grow-0",
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
					"gap-2 normal-case focus:underline focus-visible:underline active:text-opacity-70 active:underline px-0",
				],
			},
			color: {
				primary: ["outline-outlinePrimary"],
				secondary: ["outline-outlineSecondary"],
				white: ["outline-white"],
			},
			full: {
				true: ["w-full"],
			},
		},
		compoundVariants: [
			{
				variant: "contained",
				color: "primary",
				className: "bg-primary outline-transparent",
			},
			{
				variant: "contained",
				color: "secondary",
				className: "bg-secondaryBackground outline-transparent",
			},
			{
				variant: "contained",
				color: "white",
				className: "bg-white outline-transparent",
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
				variant: "outlined",
				color: "white",
				className: "text-white",
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
			{
				variant: "link",
				color: "white",
				className: "text-white outline-transparent",
			},
		],
	},
);
