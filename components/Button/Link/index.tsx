import styles from "components/Button/Button.module.scss";
import cn from "helpers/cn";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import { ComponentProps, ElementRef, ReactNode, forwardRef } from "react";

interface ButtonLinkProps extends ComponentProps<"a"> {
	children?: ReactNode;
	variant?: "contained" | "outlined" | "link";
	color?: "primary" | "secondary";
}
const ButtonLink = forwardRef<ElementRef<"a">, ButtonLinkProps>(
	(
		{ children, variant = "link", color = "primary", className, ...props },
		forwardedRef,
	) => {
		const variantsClassName = variantsToClassNameStyles(
			{ variant, color },
			styles,
		);
		return (
			<a
				ref={forwardedRef}
				className={cn(styles.root, variantsClassName, className)}
				{...props}
			>
				{children}
			</a>
		);
	},
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
