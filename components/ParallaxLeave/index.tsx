import { cx } from "class-variance-authority";
import ParallaxLeaveMotionViewTimeline from "components/ParallaxLeave/MotionViewTimeline";
import styles from "components/ParallaxLeave/ParallaxLeave.module.css";

interface ParallaxLeaveProps {
	className?: string;
	children: React.ReactNode;
}

const ParallaxLeave = ({ children, className }: ParallaxLeaveProps) => (
	<ParallaxLeaveMotionViewTimeline>
		<div className={cx(styles.root, className)}>{children}</div>
	</ParallaxLeaveMotionViewTimeline>
);

export default ParallaxLeave;
