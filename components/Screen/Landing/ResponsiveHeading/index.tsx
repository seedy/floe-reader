import { ReactNode } from "react";
import styles from "components/Screen/Landing/ResponsiveHeading/ResponsiveHeading.module.css";

interface ResponsiveHeadingProps {
	desktop: ReactNode;
	mobile: ReactNode;
}
const ResponsiveHeading = ({ desktop, mobile }: ResponsiveHeadingProps) => {
	return (
		<>
			<span className={styles.desktop}>{desktop}</span>
			<span className={styles.mobile}>{mobile}</span>
		</>
	);
};

export default ResponsiveHeading;
