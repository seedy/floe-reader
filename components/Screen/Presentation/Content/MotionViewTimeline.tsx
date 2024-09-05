"use client";
import SlotMotion from "components/Slot/Motion";
import { useScroll, useTransform } from "framer-motion";
import useSupportsViewTimeline from "hooks/useSupportsViewTimeline";
import { ReactNode, useRef } from "react";

interface PresentationContentMotionViewTimelineProps {
	children: ReactNode;
}
const PresentationContentMotionViewTimeline = ({
	children,
}: PresentationContentMotionViewTimelineProps) => {
	const supportsViewTimeline = useSupportsViewTimeline();
	const scrollTarget = useRef(null);
	const { scrollYProgress } = useScroll({
		target: supportsViewTimeline ? undefined : scrollTarget,
		offset: ["start end", "end start"],
	});
	const translateY = useTransform(
		scrollYProgress,
		[0, 0.2, 0.9, 1],
		["var(--parallax-factor)", "0px", "0px", "0px"],
	);
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

	if (supportsViewTimeline) {
		return <>{children}</>;
	}
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
