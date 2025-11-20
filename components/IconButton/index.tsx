import { VariantProps } from "class-variance-authority";
import { iconButtonVariants } from "components/IconButton/variants";
import cn from "helpers/cn";
import { ComponentProps, ReactNode } from "react";

interface IconButtonProps extends ComponentProps<"button">, VariantProps<typeof iconButtonVariants> {
	children?: ReactNode;
	"aria-label": string;
}
const IconButton = ({
	children,
	size = "medium",
	variant = "outlined",
	className,
	ref: forwardedRef,
	...props
}: IconButtonProps) => {
	const iconButtonVariantsClassName = iconButtonVariants({ size, variant });

	return (
		<button
			type="button"
			ref={forwardedRef}
			className={cn(iconButtonVariantsClassName, className)}
			{...props}
		>
			{children}
		</button>
	);
};

export default IconButton;
