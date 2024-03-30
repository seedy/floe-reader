import styles from "components/IconButton/IconButton.module.scss";
import cn from "helpers/cn";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import { ComponentProps, ElementRef, ReactNode, forwardRef } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
	children?: ReactNode;
	variant?: "small" | "medium" | "large";
}
const IconButton = forwardRef<ElementRef<"button">, IconButtonProps>(
	({ children, variant = "medium", className, ...props }, forwardedRef) => {
		const variantsClassName = variantsToClassNameStyles({ variant }, styles);
		return (
			<button
				type="button"
				ref={forwardedRef}
				className={cn(styles.root, variantsClassName, className)}
				{...props}
			>
				{children}
			</button>
		);
	},
);

IconButton.displayName = "IconButton";

export default IconButton;
