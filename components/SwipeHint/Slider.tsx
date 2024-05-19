import { cx } from "class-variance-authority";
import { useSliderLoadedContext } from "components/Context/Slider/Loaded";
import SwipeHint from "components/SwipeHint";

const SwipeHintSlider = () => {
	const loaded = useSliderLoadedContext();

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
