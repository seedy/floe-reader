import { iconButtonVariants } from "components/IconButton/variants";
import cn from "helpers/cn";
import { ComponentProps, ElementRef, ReactNode, forwardRef } from "react";

interface IconButtonLinkProps extends ComponentProps<"a"> {
	children?: ReactNode;
	size?: "small" | "medium" | "large";
}
const IconButtonLink = forwardRef<ElementRef<"a">, IconButtonLinkProps>(
	({ children, size = "medium", className, ...props }, ref) => {
		const iconButtonVariantsClassName = iconButtonVariants({ size });

		return (
			<a
				ref={ref}
				className={cn(iconButtonVariantsClassName, className)}
				{...props}
			>
				{children}
			</a>
		);
	},
);

IconButtonLink.displayName = "IconButtonLink";

export default IconButtonLink;
