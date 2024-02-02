import { Children, MouseEvent, ReactNode, useMemo, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
// STYLES
import "keen-slider/keen-slider.min.css";
import Flex from "components/Flex";
import CarouselIndicator from "components/Carousel/Indicator";
import CarouselPlayPause from "components/Carousel/PlayPause";
import keenSliderCarousel from "helpers/keenSlider/plugins/carousel";
import styles from "components/Carousel/Carousel.module.scss";
import Box from "components/Box";
import mask from "public/mask.png";
import maskDesktop from "public/mask-desktop.png";
import useIsDesktop from "hooks/useIsDesktop";

interface CarouselProps {
	children: ReactNode;
	delay?: number;
	headingDesktop?: ReactNode;
}

const Carousel = ({
	children,
	headingDesktop,
	delay = 2000,
}: CarouselProps) => {
	const [loaded, setLoaded] = useState(false);
	const [playing, setPlaying] = useState(true);
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const slides = Children.count(children);
	const dotKeys = useMemo(() => Array.from(Array(slides).keys()), [slides]);
	const isDesktop = useIsDesktop();
	const maskSrc = isDesktop ? maskDesktop.src : mask.src;
	const minHeight = isDesktop ? 556 : 360;

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

	const onPause = (e: MouseEvent) => {
		e.stopPropagation();
		setPlaying(false);
		(instanceRef.current?.emit as any)("stopped");
	};

	const onResume = (e: MouseEvent) => {
		e.stopPropagation();
		setPlaying(true);
		(instanceRef.current?.emit as any)("resumed");
	};

	return (
		<Box className={styles.root}>
			<Box
				className={`${styles.slides} keen-slider`}
				style={{ maskImage: `url(${maskSrc})`, minHeight }}
				ref={sliderRef}
			>
				<CarouselPlayPause
					playing={playing}
					onClick={playing ? onPause : onResume}
				/>
				{Children.map(children, (child, index) => (
					<Box
						className={`${styles.slide} keen-slider__slide`}
						key={index}
						style={{ opacity: opacities[index] }}
					>
						{child}
					</Box>
				))}
			</Box>
			{loaded && instanceRef.current && (
				<Flex className={styles.indicators}>
					{dotKeys.map((key) => (
						<CarouselIndicator
							key={key}
							active={currentSlide === key}
							onClick={() => {
								instanceRef.current?.moveToIdx(key);
							}}
						/>
					))}
				</Flex>
			)}
			{headingDesktop && (
				<div className={styles.desktopHeading}>{headingDesktop}</div>
			)}
		</Box>
	);
};

export default Carousel;
