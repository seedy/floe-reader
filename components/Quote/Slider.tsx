import SliderOverflowingContextProvider from "components/Context/Slider/Overflowing";
import Quote from "components/Quote";
import cn from "helpers/cn";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Children, ReactNode, useLayoutEffect, useRef, useState } from "react";

const getWidthOverflow = (element: Element) =>
	element.scrollWidth > element.clientWidth;

interface QuoteSliderProps {
	children: ReactNode;
}

const QuoteSlider = ({ children }: QuoteSliderProps) => {
	const [loaded, setLoaded] = useState(false);
	const ref = useRef<HTMLDivElement | null>();
	const [ksRef] = useKeenSlider({
		mode: "free",
		slides: {
			number: Children.count(children),
			spacing: 16,
			perView: "auto",
		},
		created() {
			setLoaded(true);
		},
	});
	const [isOverflowing, setOverflowing] = useState(false);

	useLayoutEffect(() => {
		if (ref.current) {
			const observer = new ResizeObserver((entries) => {
				const isSomeEntryOverflowing = entries.some((entry) => {
					return getWidthOverflow(entry.target);
				});
				setOverflowing(isSomeEntryOverflowing);
			});
			observer.observe(ref.current);
			return () => {
				observer.disconnect();
			};
		}
	}, []);

	return (
		<SliderOverflowingContextProvider value={loaded && isOverflowing}>
			<Quote
				ref={(node) => {
					ksRef(node);
					ref.current = node;
				}}
				className={cn("keen-slider", { "gap-4": !loaded })}
			>
				{children}
			</Quote>
		</SliderOverflowingContextProvider>
	);
};

export default QuoteSlider;
