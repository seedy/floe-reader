import { useSliderOverflowingContext } from "components/Context/Slider/Overflowing";
import SwipeHint from "components/SwipeHint";
import cn from "helpers/cn";

const SwipeHintSlider = () => {
	const overflowing = useSliderOverflowingContext();

	return (
		<SwipeHint
			className={cn("h-0 opacity-0 transition-all duration-1000", {
				"h-auto mb-10 opacity-100": overflowing,
			})}
		/>
	);
};

export default SwipeHintSlider;
