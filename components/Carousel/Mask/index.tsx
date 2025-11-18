import styles from "components/Carousel/Mask/Mask.module.css";
import cn from "helpers/cn";
import { ReactNode, Ref } from "react";

interface CarouselMaskProps {
	children?: ReactNode;
	className?: string;
	ref?: Ref<HTMLDivElement>;
}
const CarouselMask = ({
	children,
	className,
	ref: forwardedRef,
}: CarouselMaskProps) => {
	return (
		<div
			className={cn(
				"h-90 w-full",
				"lg:h-139",
				"sm:h-[40vh] xl:h-[70vh]",
				styles.root,
				className,
			)}
			ref={forwardedRef}
		>
			{children}
		</div>
	);
};

export default CarouselMask;
