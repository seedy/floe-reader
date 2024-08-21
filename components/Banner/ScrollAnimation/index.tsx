"use client";
import styles from "components/Banner/ScrollAnimation/ScrollAnimation.module.scss";
import useScrollDirection from "components/Banner/useScrollDirection";
import cn from "helpers/cn";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import { ReactNode } from "react";

interface BannerScrollAnimationProps {
	children?: ReactNode;
	className?: string;
}
const BannerScrollAnimation = ({
	children,
	className,
}: BannerScrollAnimationProps) => {
	const direction = useScrollDirection();
	const directionClassNames = variantsToClassNameStyles({ direction }, styles);

	return (
		<ul className={cn(styles.root, directionClassNames, className)}>
			{children}
		</ul>
	);
};

export default BannerScrollAnimation;
