import { cva } from "class-variance-authority";

const COLOR_VARIANTS = {
  default: ["text-text"],
  primary: ["text-primary"],
  secondary: ["text-secondary-background"],
  white: ["text-white"],
};

export const textVariants = cva("m-0 block font-body text-body", {
  defaultVariants: {
    color: "default",
  },
  variants: {
    color: COLOR_VARIANTS,
    inline: {
      true: ["inline"],
    },
  },
});

export const headingVariants = cva("m-0 block font-display", {
  defaultVariants: {
    align: "center",
    color: "default",
  },
  variants: {
    align: {
      center: ["text-center"],
      left: ["text-left"],
      right: ["text-right"],
    },
    color: COLOR_VARIANTS,
    variant: {
      h1: ["text-heading1 font-regular"],
      h2: ["text-heading2 font-semibold"],
      h3: ["text-heading3 font-medium"],
      subtitle: ["inline-block text-subtitle font-bold"],
    },
  },
});
