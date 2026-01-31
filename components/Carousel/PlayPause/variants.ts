import { cva } from "class-variance-authority";

export const playPauseIconVariants = cva(
  "rounded-round bg-black/70 p-6 text-secondary-background opacity-0 transition-[opacity,transform]",
  {
    variants: {
      visible: {
        true: ["opacity-100 scale-150"],
      },
    },
  },
);
