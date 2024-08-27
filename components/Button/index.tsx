import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "components/Button/variants";
import cn from "helpers/cn";
import { ComponentProps, ElementRef, ReactNode, forwardRef } from "react";

interface ButtonProps
	extends Omit<ComponentProps<"button">, "color">,
		VariantProps<typeof buttonVariants> {
	children?: ReactNode;
}
const Button = forwardRef<ElementRef<"button">, ButtonProps>(
	(
		{
			children,
			variant = "outlined",
			color = "primary",
			full,
			className,
			...props
		},
		forwardedRef,
	) => {
		const buttonVariantsClassName = buttonVariants({ variant, color, full });
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
