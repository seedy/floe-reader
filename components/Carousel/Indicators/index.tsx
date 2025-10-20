import CarouselIndicator from "components/Carousel/Indicator";
import SlotTrack from "components/Slot/Track";
import { CustomKeenSliderHooks } from "helpers/keenSlider/plugins/carousel";
import { KeenSliderInstance } from "keen-slider/react";
import {
	FocusEvent,
	KeyboardEvent,
	MouseEvent,
	RefObject,
	useRef,
} from "react";

interface CarouselIndicatorsProps {
	className?: string;
	keys: number[];
	currentSlide: number;
	instanceRef: RefObject<KeenSliderInstance<
		{},
		{},
		CustomKeenSliderHooks
	> | null>;
	onPause?: (e: MouseEvent | KeyboardEvent | FocusEvent) => void;
}
const CarouselIndicators = ({
	className,
	keys,
	currentSlide,
	instanceRef,
	onPause,
}: CarouselIndicatorsProps) => {
	const indicatorRefList = useRef<(HTMLButtonElement | null)[]>(
		Array(keys.length).fill(null),
	);
	return (
		<div
			className={className}
			role="tablist"
			aria-orientation="horizontal"
			aria-label="Contrôles du carousel"
		>
			{keys.map((key) => (
				<SlotTrack key={key} name={`click carousel indicator n°${key}`}>
					<CarouselIndicator
						id={`tab-${key}`}
						aria-controls={`panel-${key}`}
						ref={(node) => {
							if (node) {
								indicatorRefList.current[key] = node;
							}
						}}
						aria-label={`Voir le slide n°${key + 1}`}
						role="tab"
						aria-selected={currentSlide === key}
						active={currentSlide === key}
						tabIndex={currentSlide === key ? 0 : -1}
						onFocus={(e) => {
							if (onPause) {
								onPause(e);
							}
						}}
						onKeyDown={(e) => {
							if (e.key === "ArrowLeft") {
								if (onPause) {
									onPause(e);
								}
								const nextKey = key === 0 ? keys.length - 1 : key - 1;
								indicatorRefList.current[nextKey]?.focus();
								return instanceRef.current?.moveToIdx(key - 1);
							}
							if (e.key === "ArrowRight") {
								if (onPause) {
									onPause(e);
								}
								const nextKey = key === keys.length - 1 ? 0 : key + 1;
								indicatorRefList.current[nextKey]?.focus();
								return instanceRef.current?.moveToIdx(key + 1);
							}
						}}
						onClick={(e) => {
							if (onPause) {
								onPause(e);
							}
							instanceRef.current?.moveToIdx(key);
						}}
					/>
				</SlotTrack>
			))}
		</div>
	);
};

export default CarouselIndicators;
