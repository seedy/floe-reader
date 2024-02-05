"use client";
import useScrollDirection from "components/Banner/useScrollDirection";
import { ReactNode } from "react";
import styles from "components/Banner/ScrollAnimation/ScrollAnimation.module.scss";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import classNames from "helpers/classNames";

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
		<ul className={classNames(styles.root, directionClassNames, className)}>
			{children}
		</ul>
	);
};

export default BannerScrollAnimation;
