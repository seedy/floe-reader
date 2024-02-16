import styles from "components/Carousel/Mask/Mask.module.css";
import { ElementRef, ReactNode, forwardRef } from "react";
import Box from "components/Box";
import classNames from "helpers/classNames";

interface CarouselMaskProps {
	children?: ReactNode;
	className?: string;
}
const CarouselMask = forwardRef<ElementRef<typeof Box>, CarouselMaskProps>(
	({ children, className }, forwardedRef) => {
		return (
			<Box className={classNames(styles.root, className)} ref={forwardedRef}>
				{children}
			</Box>
		);
	},
);

CarouselMask.displayName = "CarouselMask";

export default CarouselMask;
