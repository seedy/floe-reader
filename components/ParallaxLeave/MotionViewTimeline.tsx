"use client";
import SlotMotion from "components/Slot/Motion";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import useSupportsViewTimeline from "hooks/useSupportsViewTimeline";
import { ReactNode, useRef } from "react";

interface ParallaxLeaveMotionViewTimelineProps {
	children: ReactNode;
}
const ParallaxLeaveMotionViewTimeline = ({
	children,
}: ParallaxLeaveMotionViewTimelineProps) => {
	const supportsViewTimeline = useSupportsViewTimeline();
	const prefersReducedMotion = useReducedMotion();
	const scrollTarget = useRef(null);
	const { scrollYProgress } = useScroll({
		target: supportsViewTimeline ? undefined : scrollTarget,
		offset: ["end end", "start start"],
	});
	const translateY = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

	if (supportsViewTimeline || prefersReducedMotion) {
		return <>{children}</>;
	}
	return (
		<SlotMotion style={{ translateY, opacity }} ref={scrollTarget}>
			{children}
		</SlotMotion>
	);
};

export default ParallaxLeaveMotionViewTimeline;
