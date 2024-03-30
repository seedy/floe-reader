import styles from "components/Button/Button.module.scss";
import cn from "helpers/cn";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import { ComponentProps, ElementRef, ReactNode, forwardRef } from "react";

interface ButtonProps extends ComponentProps<"button"> {
	children?: ReactNode;
	variant?: "contained" | "outlined" | "link";
	color?: "primary" | "secondary";
}
const Button = forwardRef<ElementRef<"button">, ButtonProps>(
	(
		{ children, variant = "outlined", color = "primary", className, ...props },
		forwardedRef,
	) => {
		const variantsClassName = variantsToClassNameStyles(
			{ variant, color },
			styles,
		);
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

Button.displayName = "Button";

export default Button;
