import Box from "components/Box";
import Image, { ImageProps } from "components/Image";
import styles from "components/Slide/Slide.module.scss";
import { ReactNode } from "react";

interface SlideProps extends ImageProps {
	heading: ReactNode;
	headingDesktop: ReactNode;
}
const Slide = ({ heading, headingDesktop, alt, ...rest }: SlideProps) => (
	<Box className={styles.root}>
		<Box className={styles.heading}>{heading}</Box>
		<Box className={styles.desktopHeading}>{headingDesktop}</Box>
		<Image alt={alt} {...rest} />
	</Box>
);

export default Slide;
