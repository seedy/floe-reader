import { useSliderOverflowingContext } from "components/Quote/Slider";
import SwipeHint from "components/SwipeHint";
import cn from "helpers/cn";

const SwipeHintSlider = () => {
	const overflowing = useSliderOverflowingContext();

	if (!overflowing) return null;

	return (
		<SwipeHint
			className={cn("starting:opacity-0 transition-opacity", {
				"mb-10 opacity-100": overflowing,
			})}
		/>
	);
};

export default SwipeHintSlider;
