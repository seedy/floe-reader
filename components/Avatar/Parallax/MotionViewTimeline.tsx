"use client";
import SlotMotion from "components/Slot/Motion";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AvatarParallaxMotionViewTimelineProps {
	children: ReactNode;
}
const AvatarParallaxMotionViewTimeline = ({
	children,
}: AvatarParallaxMotionViewTimelineProps) => {
	const prefersReducedMotion = useReducedMotion();
	const scrollTarget = useRef(null);
	const { scrollYProgress } = useScroll({
		target: scrollTarget,
		offset: ["start end", "end end"],
		layoutEffect: false,
	});
	const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

	const style = prefersReducedMotion ? {} : { scale };

	return (
		<SlotMotion style={style} ref={scrollTarget}>
			{children}
		</SlotMotion>
	);
};

export default AvatarParallaxMotionViewTimeline;
