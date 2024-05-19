import { iconButtonVariants } from "components/IconButton/variants";
import cn from "helpers/cn";
import { ComponentProps, ElementRef, ReactNode, forwardRef } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
	children?: ReactNode;
	size?: "small" | "medium" | "large";
}
const IconButton = forwardRef<ElementRef<"button">, IconButtonProps>(
	({ children, size = "medium", className, ...props }, forwardedRef) => {
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
	},
);

IconButton.displayName = "IconButton";

export default IconButton;
