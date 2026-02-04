import cn from "helpers/cn";
import type { ReactNode } from "react";

interface CardSlideProps {
  children: ReactNode;
}
const CardSlide = ({ children }: CardSlideProps) => (
  <div
    className={cn(
      "keen-slider__slide flex min-h-0! min-w-fit overflow-visible!",
      "w-auto!",
    )}
  >
    {children}
  </div>
);

export default CardSlide;
