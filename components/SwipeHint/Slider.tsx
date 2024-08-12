import { cx } from "class-variance-authority";
import { useSliderOverflowingContext } from "components/Context/Slider/Overflowing";
import SwipeHint from "components/SwipeHint";

const SwipeHintSlider = () => {
	const loaded = useSliderOverflowingContext();

	return (
		<SwipeHint
			className={cx(
				"opacity-0 transition-opacity duration-1000",
				loaded && "opacity-100",
			)}
		/>
	);
};

export default SwipeHintSlider;
