"use client";
import CarouselIndicators from "components/Carousel/Indicators";
import CarouselMask from "components/Carousel/Mask";
import CarouselPlayPause from "components/Carousel/PlayPause";
import cn from "helpers/cn";
import keenSliderCarousel, {
	CustomKeenSliderHooks,
} from "helpers/keenSlider/plugins/carousel";
// STYLES
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import {
	Children,
	FocusEvent,
	type KeyboardEvent,
	type MouseEvent,
	type ReactNode,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";

interface CarouselProps {
	children: ReactNode;
	delay?: number;
	headingDesktop?: ReactNode;
	className?: string;
}

function easeInOutQuint(x: number): number {
	return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
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

	const [sliderRef, instanceRef] = useKeenSlider<
		HTMLDivElement,
		unknown,
		unknown,
		CustomKeenSliderHooks
	>(
		{
			slides,
			loop: true,
			defaultAnimation: {
				duration: 1000,
				easing: easeInOutQuint,
			},
			slideChanged(slider) {
				document.title = slider.track.details.rel.toString();
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
		(e: MouseEvent | KeyboardEvent | FocusEvent) => {
			e.stopPropagation();
			setPlaying(false);
			instanceRef.current?.emit("stopped");
		},
		[instanceRef],
	);

	const onTogglePlaying = useCallback(
		(e: MouseEvent<HTMLButtonElement>, nextPlaying: boolean) => {
			e.stopPropagation();
			setPlaying(nextPlaying);
			instanceRef.current?.emit(nextPlaying ? "resumed" : "stopped");
		},
		[instanceRef],
	);

	useEffect(() => {
		const onVisibilityChange = () => {
			if (document.visibilityState === "hidden") {
				instanceRef.current?.emit("stopped");
				return;
			}
			instanceRef.current?.emit("resumed")
		};
		document.addEventListener("visibilitychange", onVisibilityChange);
		return () => {
			document.removeEventListener("visibilitychange", onVisibilityChange)
		}
	}, [instanceRef])

	return (
		<section
			aria-label="Photos de couverture"
			aria-roledescription="carousel"
			className={cn("relative flex flex-col items-center", className)}
		>
			{loaded && (
				<CarouselIndicators
					className={cn(
						"absolute bottom-4 left-0 z-10 flex pl-5",
						"md:bottom-0",
						"lg:bottom-auto lg:left-auto lg:right-0 lg:top-0 lg:pl-0",
					)}
					keys={dotKeys}
					currentSlide={currentSlide}
					instanceRef={instanceRef}
					onPause={onPause}
				/>
			)}
			<CarouselMask
				className={cn("relative overflow-hidden", "keen-slider")}
				ref={sliderRef}
			>
				<CarouselPlayPause
					playing={playing}
					onTogglePlaying={onTogglePlaying}
				/>
				{Children.map(children, (child, index) => (
					<div
						className={cn("min-w-full flex-initial", "keen-slider__slide", {
							invisible: opacities[index] === 0,
						})}
						aria-hidden={opacities[index] === 0}
						role="tabpanel"
						aria-labelledby={`tab-${index}`}
						key={index}
						style={{ opacity: opacities[index] }}
					>
						{child}
					</div>
				))}
			</CarouselMask>
			{headingDesktop && (
				<div className="absolute bottom-0 left-0 hidden pt-4 lg:block lg:w-3/5">
					{headingDesktop}
				</div>
			)}
		</section>
	);
};

export default Carousel;
