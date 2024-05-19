import SliderLoadedContextProvider from "components/Context/Slider/Loaded";
import Quote from "components/Quote";
import cn from "helpers/cn";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Children, ReactNode, useState } from "react";

interface QuoteSliderProps {
	children: ReactNode;
}
const QuoteSlider = ({ children }: QuoteSliderProps) => {
	const [loaded, setLoaded] = useState(false);
	const [ref] = useKeenSlider({
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

	return (
		<SliderLoadedContextProvider value={loaded}>
			<Quote ref={ref} className={cn("keen-slider", { "gap-4": !loaded })}>
				{children}
			</Quote>
		</SliderLoadedContextProvider>
	);
};

export default QuoteSlider;
