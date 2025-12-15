import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "m-0 inline-flex min-h-8.5 min-w-20 max-w-80 justify-center items-center rounded-md border-none bg-none px-6 py-1 text-center font-body text-button font-bold uppercase outline-solid outline-2 outline-transparent focus-visible:outline-[6px] lg:w-auto lg:max-w-none lg:grow-0 whitespace-nowrap",
  {
    compoundVariants: [
      {
        className: "bg-primary outline-transparent",
        color: "primary",
        variant: "contained",
      },
      {
        className: "bg-secondary-background outline-transparent",
        color: "secondary",
        variant: "contained",
      },
      {
        className: "bg-white outline-transparent",
        color: "white",
        variant: "contained",
      },
      {
        className: "text-primary",
        color: "primary",
        variant: "outlined",
      },
      {
        className: "text-secondary-background",
        color: "secondary",
        variant: "outlined",
      },
      {
        className: "text-white",
        color: "white",
        variant: "outlined",
      },
      {
        className: "text-primary outline-transparent",
        color: "primary",
        variant: "link",
      },
      {
        className: "text-secondary-background outline-transparent",
        color: "secondary",
        variant: "link",
      },
      {
        className: "text-white outline-transparent",
        color: "white",
        variant: "link",
      },
    ],
    variants: {
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
      variant: {
        contained: [
          "text-background hover:text-white focus:text-white focus:shadow-focus-large focus-visible:shadow-focus-large active:text-white active:inset-shadow-active-large",
        ],
        link: [
          "gap-2 normal-case focus:underline focus-visible:underline active:text-opacity-70 active:underline px-0",
        ],
        outlined: [
          "outline-solid outline-2 outline-transparent hover:bg-white focus:bg-white focus:shadow-focus-large focus-visible:shadow-focus-large active:bg-white active:inset-shadow-active-large",
        ],
      },
    },
  },
);
