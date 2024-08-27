"use client";
import CarouselIndicator from "components/Carousel/Indicator";
import CarouselMask from "components/Carousel/Mask";
import CarouselPlayPause from "components/Carousel/PlayPause";
import cn from "helpers/cn";
import keenSliderCarousel from "helpers/keenSlider/plugins/carousel";
// STYLES
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import {
	Children,
	type MouseEvent,
	type ReactNode,
	useCallback,
	useMemo,
	useState,
} from "react";

interface CarouselProps {
	children: ReactNode;
	delay?: number;
	headingDesktop?: ReactNode;
	className?: string;
}

const Carousel = ({
	children,
	headingDesktop,
	delay = 2000,
	className,
}: CarouselProps) => {
	const [loaded, setLoaded] = useState(false);
	const [playing, setPlaying] = useState(true);
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const slides = Children.count(children);
	const dotKeys = useMemo(() => Array.from(Array(slides).keys()), [slides]);

	const [opacities, setOpacities] = useState<number[]>([]);

	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
		{
			slides,
			loop: true,
			slideChanged(slider) {
				setCurrentSlide(slider.track.details.rel);
			},
			detailsChanged(s) {
				const nextOpacities = s.track.details.slides.map(
					(slide) => slide.portion,
				);
				setOpacities(nextOpacities);
			},
			created() {
				setLoaded(true);
			},
		},
		[keenSliderCarousel(delay)],
	);

	const onPause = useCallback(
		(e: MouseEvent) => {
			e.stopPropagation();
			setPlaying(false);
			(instanceRef.current?.emit as any)("stopped");
		},
		[instanceRef],
	);

	const onResume = useCallback(
		(e: MouseEvent) => {
			e.stopPropagation();
			setPlaying(true);
			(instanceRef.current?.emit as any)("resumed");
		},
		[instanceRef],
	);

	return (
		<div className={cn("relative flex flex-col items-center", className)}>
			<CarouselMask
				className={cn("relative overflow-hidden", "keen-slider")}
				ref={sliderRef}
			>
				<CarouselPlayPause
					playing={playing}
					onClick={playing ? onPause : onResume}
				/>
				{Children.map(children, (child, index) => (
					<div
						className={cn("min-w-full flex-initial", "keen-slider__slide")}
						key={index}
						style={{ opacity: opacities[index] }}
					>
						{child}
					</div>
				))}
			</CarouselMask>
			{loaded && instanceRef.current && (
				<div
					className={cn(
						"absolute bottom-4 left-0 z-10 flex pl-5",
						"md:bottom-0",
						"lg:bottom-auto lg:left-auto lg:right-0 lg:top-0 lg:pl-0",
					)}
				>
					{dotKeys.map((key) => (
						<CarouselIndicator
							key={key}
							active={currentSlide === key}
							onClick={() => {
								instanceRef.current?.moveToIdx(key);
							}}
						/>
					))}
				</div>
			)}
			{headingDesktop && (
				<div className="absolute bottom-0 left-0 hidden pt-4 lg:block lg:w-3/5">
					{headingDesktop}
				</div>
			)}
		</div>
	);
};

export default Carousel;
