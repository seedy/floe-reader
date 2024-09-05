"use client";
import SlotMotion from "components/Slot/Motion";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import useSupportsViewTimeline from "hooks/useSupportsViewTimeline";
import { ReactNode, useRef } from "react";

interface AvatarParallaxMotionViewTimelineProps {
	children: ReactNode;
}
const AvatarParallaxMotionViewTimeline = ({
	children,
}: AvatarParallaxMotionViewTimelineProps) => {
	const supportsViewTimeline = useSupportsViewTimeline();
	const prefersReducedMotion = useReducedMotion();
	const scrollTarget = useRef(null);
	const { scrollYProgress } = useScroll({
		target: supportsViewTimeline ? undefined : scrollTarget,
		offset: ["start end", "end end"],
	});
	const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

	if (supportsViewTimeline || prefersReducedMotion) {
		return <>{children}</>;
	}
	return (
		<SlotMotion style={{ scale }} ref={scrollTarget}>
			{children}
		</SlotMotion>
	);
};

export default AvatarParallaxMotionViewTimeline;
