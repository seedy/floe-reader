import { cx } from "class-variance-authority";
import styles from "components/ParallaxLeave/ParallaxLeave.module.css";

interface ParallaxLeaveProps {
	className?: string;
	children: React.ReactNode;
}

const ParallaxLeave = ({ children, className }: ParallaxLeaveProps) => (
	<div className={cx(styles.root, className)}>{children}</div>
);

export default ParallaxLeave;
