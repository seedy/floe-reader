"use client";
import SlotMotion from "components/Slot/Motion";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxLeaveMotionViewTimelineProps {
	children: ReactNode;
}
const ParallaxLeaveMotionViewTimeline = ({
	children,
}: ParallaxLeaveMotionViewTimelineProps) => {
	const prefersReducedMotion = useReducedMotion();
	const scrollTarget = useRef(null);
	const { scrollYProgress } = useScroll({
		target: scrollTarget,
		offset: ["end end", "start start"],
		layoutEffect: false,
	});
	const translateY = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

	const style = prefersReducedMotion ? {} : { translateY, opacity };

	return (
		<SlotMotion style={style} ref={scrollTarget}>
			{children}
		</SlotMotion>
	);
};

export default ParallaxLeaveMotionViewTimeline;
