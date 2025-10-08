import { iconButtonVariants } from "components/IconButton/variants";
import cn from "helpers/cn";
import { ComponentProps, ReactNode } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
	children?: ReactNode;
	size?: "small" | "medium" | "large";
}
const IconButton = ({
	children,
	size = "medium",
	className,
	ref: forwardedRef,
	...props
}: IconButtonProps) => {
	const iconButtonVariantsClassName = iconButtonVariants({ size });

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
