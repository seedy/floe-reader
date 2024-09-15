import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "components/Button/variants";
import cn from "helpers/cn";
import Link from "next/link";
import { ComponentProps, ElementRef, ReactNode, forwardRef } from "react";

interface ButtonLinkNextProps
	extends Omit<ComponentProps<typeof Link>, "color">,
		VariantProps<typeof buttonVariants> {
	children?: ReactNode;
	external?: boolean;
}
const ButtonLinkNext = forwardRef<ElementRef<typeof Link>, ButtonLinkNextProps>(
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
			<Link
				ref={forwardedRef}
				className={cn(buttonVariantsClassName, className)}
				{...props}
			>
				{children}
				{external && <ExternalLinkIcon />}
			</Link>
		);
	},
);

ButtonLinkNext.displayName = "ButtonLinkNext";

export default ButtonLinkNext;
