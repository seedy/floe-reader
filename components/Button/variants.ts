import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"m-0 inline-flex min-h-8.5 min-w-20 max-w-80 justify-center items-center rounded-md border-none bg-none px-6 py-1 text-center font-body text-button font-bold uppercase outline-solid outline-2 outline-transparent focus-visible:outline-[6px] lg:w-auto lg:max-w-none lg:grow-0 whitespace-nowrap",
	{
		variants: {
			variant: {
				contained: [
					"text-background hover:text-white focus:text-white focus:shadow-focus-large focus-visible:shadow-focus-large active:text-white active:inset-shadow-active-large",
				],
				outlined: [
					"outline-solid outline-2 outline-transparent hover:bg-white focus:bg-white focus:shadow-focus-large focus-visible:shadow-focus-large active:bg-white active:inset-shadow-active-large",
				],
				link: [
					"gap-2 normal-case focus:underline focus-visible:underline active:text-opacity-70 active:underline px-0",
				],
			},
			color: {
				primary: ["outline-primary"],
				secondary: ["outline-secondary-background"],
				white: ["outline-white"],
			},
			full: {
				true: ["w-full"],
			},
			inline: {
				true: ["min-w-fit items-baseline"],
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
				className: "bg-secondary-background outline-transparent",
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
				className: "text-secondary-background",
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
				className: "text-secondary-background outline-transparent",
			},
			{
				variant: "link",
				color: "white",
				className: "text-white outline-transparent",
			},
		],
	},
);
