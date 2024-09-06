import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "components/Button/variants";
import cn from "helpers/cn";
import { ComponentProps, ElementRef, ReactNode, forwardRef } from "react";

interface ButtonLinkProps
	extends Omit<ComponentProps<"a">, "color">,
		VariantProps<typeof buttonVariants> {
	children?: ReactNode;
	external?: boolean;
}
const ButtonLink = forwardRef<ElementRef<"a">, ButtonLinkProps>(
	(
		{
			children,
			variant = "link",
			color = "primary",
			className,
			external,
			full,
			inline,
			...props
		},
		forwardedRef,
	) => {
		const buttonVariantsClassName = buttonVariants({
			variant,
			color,
			full,
			inline,
		});

		return (
			<a
				ref={forwardedRef}
				className={cn(buttonVariantsClassName, className)}
				{...props}
			>
				{children}
				{external && <ExternalLinkIcon />}
			</a>
		);
	},
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
