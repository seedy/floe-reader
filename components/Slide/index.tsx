import Image, { ImageProps } from "components/Image";
import styles from "components/Slide/Slide.module.scss";
import { ReactNode } from "react";
import mask from "public/mask.png";

interface SlideProps extends ImageProps {
	heading: ReactNode;
}
const Slide = ({ heading, alt, ...rest }: SlideProps) => (
	<div className={styles.root}>
		<div className={styles.heading}>{heading}</div>
		<Image style={{ maskImage: `url(${mask.src})` }} alt={alt} {...rest} />
	</div>
);

export default Slide;
