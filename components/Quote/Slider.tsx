import SliderOverflowingContextProvider from "components/Context/Slider/Overflowing";
import Quote from "components/Quote";
import cn from "helpers/cn";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import {
	Children,
	ComponentProps,
	useLayoutEffect,
	useRef,
	useState,
} from "react";

// HELPERS
const getWidthOverflow = (element: HTMLElement) => {
	return element.scrollWidth > element.offsetWidth;
};

interface QuoteSliderProps extends ComponentProps<typeof Quote> {}

const QuoteSlider = ({ children, className }: QuoteSliderProps) => {
	const [loaded, setLoaded] = useState(false);
	const [isOverflowing, setOverflowing] = useState(false);

	const ref = useRef<HTMLDivElement | null>();
	const [ksRef] = useKeenSlider({
		mode: "free" as const,
		breakpoints: {
			"(width >= 64rem)": {
				disabled: true,
			},
		},
		slides: {
			spacing: 16,
			number: Children.count(children),
			perView: "auto" as const,
		},
		created() {
			setLoaded(true);
		},
	});

	useLayoutEffect(() => {
		if (!ref.current) return;
		const observer = new ResizeObserver((entries) => {
			const isSomeEntryOverflowing = entries.some((entry) => {
				return getWidthOverflow(entry.target as HTMLElement);
			});
			setOverflowing(isSomeEntryOverflowing);
		});
		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<SliderOverflowingContextProvider value={loaded && isOverflowing}>
			<Quote
				ref={(node) => {
					if (!node) return;
					ksRef(node);
					ref.current = node;
				}}
				className={cn(
					"keen-slider overflow-hidden",
					!loaded && "gap-4",
					className,
				)}
			>
				{children}
			</Quote>
		</SliderOverflowingContextProvider>
	);
};

export default QuoteSlider;
