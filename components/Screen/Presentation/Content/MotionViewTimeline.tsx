"use client";
import SlotMotion from "components/Slot/Motion";
import { useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface PresentationContentMotionViewTimelineProps {
	children: ReactNode;
}
const PresentationContentMotionViewTimeline = ({
	children,
}: PresentationContentMotionViewTimelineProps) => {
	const scrollTarget = useRef(null);
	const { scrollYProgress } = useScroll({
		target: scrollTarget,
		offset: ["start end", "end start"],
		layoutEffect: false,
	});
	const translateY = useTransform(
		scrollYProgress,
		[0, 0.2, 0.9, 1],
		["var(--parallax-factor)", "0px", "0px", "0px"],
	);
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

	return (
		<SlotMotion
			style={{
				translateY,
				opacity,
			}}
			ref={scrollTarget}
		>
			{children}
		</SlotMotion>
	);
};

export default PresentationContentMotionViewTimeline;
