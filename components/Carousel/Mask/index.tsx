import styles from "components/Carousel/Mask/Mask.module.css";
import cn from "helpers/cn";
import { ReactNode, forwardRef } from "react";

interface CarouselMaskProps {
	children?: ReactNode;
	className?: string;
}
const CarouselMask = forwardRef<HTMLDivElement, CarouselMaskProps>(
	({ children, className }, forwardedRef) => {
		return (
			<div
				className={cn(
					"size-full",
					"min-h-[22.5rem] min-w-[22.5rem]",
					"lg:min-h-[34.75rem]",
					"sm:h-[40vh] xl:h-[70vh]",
					styles.root,
					className,
				)}
				ref={forwardedRef}
			>
				{children}
			</div>
		);
	},
);

CarouselMask.displayName = "CarouselMask";

export default CarouselMask;
