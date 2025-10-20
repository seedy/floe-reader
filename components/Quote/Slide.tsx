import cn from "helpers/cn";
import { ReactNode } from "react";

interface QuoteSlideProps {
	children: ReactNode;
}
const QuoteSlide = ({ children }: QuoteSlideProps) => (
	<div
		className={cn(
			"keen-slider__slide flex min-h-0! min-w-fit overflow-visible!",
			"w-auto! lg:w-full!",
		)}
	>
		{children}
	</div>
);

export default QuoteSlide;
