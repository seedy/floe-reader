"use client";
import { cx } from "class-variance-authority";
import styles from "components/ParallaxLeave/ParallaxLeave.module.css";
import { getSupportsViewTimeline } from "helpers/getSupportsViewTimeline";
import dynamic from "next/dynamic";

const ParallaxLeaveMotionViewTimeline = dynamic(
	() => import("components/ParallaxLeave/MotionViewTimeline"),
);
interface ParallaxLeaveProps {
	className?: string;
	children: React.ReactNode;
}

const ParallaxLeave = ({ children, className }: ParallaxLeaveProps) => {
	const supportsViewTimeline = getSupportsViewTimeline();
	if (supportsViewTimeline) {
		return <div className={cx(styles.root, className)}>{children}</div>;
	}
	return (
		<ParallaxLeaveMotionViewTimeline>
			<div className={cx(styles.root, className)}>{children}</div>
		</ParallaxLeaveMotionViewTimeline>
	);
};

export default ParallaxLeave;
