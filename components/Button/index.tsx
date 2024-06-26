import { buttonVariants } from "components/Button/variants";
import cn from "helpers/cn";
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
		const buttonVariantsClassName = buttonVariants({ variant, color });
		return (
			<button
				type="button"
				ref={forwardedRef}
				className={cn(buttonVariantsClassName, className)}
				{...props}
			>
				{children}
			</button>
		);
	},
);

Button.displayName = "Button";

export default Button;
