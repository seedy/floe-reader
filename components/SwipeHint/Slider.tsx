import { cx } from "class-variance-authority";
import { useSliderOverflowingContext } from "components/Context/Slider/Overflowing";
import SwipeHint from "components/SwipeHint";

const SwipeHintSlider = () => {
	const overflowing = useSliderOverflowingContext();

	return (
		<SwipeHint
			className={cx("opacity-0 transition-all duration-1000", {
				"mb-10 opacity-100": overflowing,
			})}
		/>
	);
};

export default SwipeHintSlider;
