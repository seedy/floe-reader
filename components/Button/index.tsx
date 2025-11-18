import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "components/Button/variants";
import cn from "helpers/cn";
import { ComponentProps, ReactNode } from "react";

interface ButtonProps
	extends Omit<ComponentProps<"button">, "color">,
		VariantProps<typeof buttonVariants> {
	children?: ReactNode;
}
const Button = ({
	children,
	variant = "outlined",
	color = "primary",
	full,
	inline,
	className,
	ref: forwardedRef,
	...props
}: ButtonProps) => {
	const buttonVariantsClassName = buttonVariants({
		variant,
		color,
		full,
		inline,
	});
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
};
export default Button;
