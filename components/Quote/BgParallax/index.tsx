"use client";
import { cx } from "class-variance-authority";
import styles from "components/Quote/BgParallax/BgParallax.module.css";
import useSupportsViewTimeline from "hooks/useSupportsViewTimeline";
import dynamic from "next/dynamic";

const BgParallaxMotionViewTimeline = dynamic(
	() => import("components/Quote/BgParallax/MotionViewTimeline"),
);
interface BgParallaxProps {
	className?: string;
	children: React.ReactNode;
}

const BgParallax = ({ children, className }: BgParallaxProps) => {
	const supportsViewTimeline = useSupportsViewTimeline();
	if (supportsViewTimeline) {
		return <div className={cx(styles.root, className)}>{children}</div>;
	}
	return (
		<BgParallaxMotionViewTimeline>
			<div className={cx(styles.root, className)}>{children}</div>
		</BgParallaxMotionViewTimeline>
	);
};

export default BgParallax;
