import { ReactNode } from "react";

interface QuoteSlideProps {
	children: ReactNode;
}
const QuoteSlide = ({ children }: QuoteSlideProps) => (
	<div className="keen-slider__slide flex !min-h-0 !w-auto min-w-fit !overflow-visible">
		{children}
	</div>
);

export default QuoteSlide;
