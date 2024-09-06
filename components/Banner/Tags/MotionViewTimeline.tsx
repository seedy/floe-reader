"use client";
import SlotMotion from "components/Slot/Motion";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface BannerTagsMotionViewTimelineProps {
	children: ReactNode;
}
const BannerTagsMotionViewTimeline = ({
	children,
}: BannerTagsMotionViewTimelineProps) => {
	const prefersReducedMotion = useReducedMotion();
	const scrollTarget = useRef(null);
	const { scrollYProgress } = useScroll({
		target: scrollTarget,
		offset: ["start end", "end start"],
		layoutEffect: false,
	});
	const translateX = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

	const style = prefersReducedMotion ? {} : { translateX };

	return (
		<SlotMotion style={style} ref={scrollTarget}>
			{children}
		</SlotMotion>
	);
};

export default BannerTagsMotionViewTimeline;
