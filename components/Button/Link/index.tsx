import { buttonVariants } from "components/Button/variants";
import cn from "helpers/cn";
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
		const buttonVariantsClassName = buttonVariants({ variant, color });

		return (
			<a
				ref={forwardedRef}
				className={cn(buttonVariantsClassName, className)}
				{...props}
			>
				{children}
			</a>
		);
	},
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
