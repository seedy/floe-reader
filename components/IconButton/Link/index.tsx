import styles from "components/IconButton/IconButton.module.scss";
import cn from "helpers/cn";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import { ComponentProps, ElementRef, ReactNode, forwardRef } from "react";

interface IconButtonLinkProps extends ComponentProps<"a"> {
	children?: ReactNode;
	variant?: "small" | "medium" | "large";
}
const IconButtonLink = forwardRef<ElementRef<"a">, IconButtonLinkProps>(
	({ children, variant = "medium", className, ...props }, ref) => {
		const variantsClassName = variantsToClassNameStyles({ variant }, styles);
		return (
			<a
				ref={ref}
				className={cn(styles.root, variantsClassName, className)}
				{...props}
			>
				{children}
			</a>
		);
	},
);

IconButtonLink.displayName = "IconButtonLink";

export default IconButtonLink;
