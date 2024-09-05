"use client";
import SlotMotion from "components/Slot/Motion";
import { useReducedMotion, useScroll, useTransform } from "framer-motion";
import useSupportsViewTimeline from "hooks/useSupportsViewTimeline";
import { ReactNode, useRef } from "react";

interface BannerTagsMotionViewTimelineProps {
	children: ReactNode;
}
const BannerTagsMotionViewTimeline = ({
	children,
}: BannerTagsMotionViewTimelineProps) => {
	const supportsViewTimeline = useSupportsViewTimeline();
	const prefersReducedMotion = useReducedMotion();
	const scrollTarget = useRef(null);
	const { scrollYProgress } = useScroll({
		target: supportsViewTimeline ? undefined : scrollTarget,
		offset: ["start end", "end start"],
	});
	const translateX = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

	if (supportsViewTimeline || prefersReducedMotion) {
		return <>{children}</>;
	}
	return (
		<SlotMotion style={{ translateX }} ref={scrollTarget}>
			{children}
		</SlotMotion>
	);
};

export default BannerTagsMotionViewTimeline;
