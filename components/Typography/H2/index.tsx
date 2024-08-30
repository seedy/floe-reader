import { VariantProps } from "class-variance-authority";
import { headingVariants } from "components/Typography/variants";
import { joinCn } from "helpers/cn";
import { ComponentProps, ElementRef, ReactNode, forwardRef } from "react";

interface H2Props
	extends VariantProps<typeof headingVariants>,
		Omit<ComponentProps<"h2">, "color"> {
	children?: ReactNode;
	className?: string;
}

const H2 = forwardRef<ElementRef<"h2">, H2Props>(
	(
		{ children, className, color, align, variant = "h2", ...props },
		forwardedRef,
	) => {
		const headingVariantClassName = headingVariants({
			variant,
			color,
			align,
		});

		return (
			<h2
				ref={forwardedRef}
				className={joinCn(headingVariantClassName, className)}
				{...props}
			>
				{children}
			</h2>
		);
	},
);

H2.displayName = "H2";

export default H2;
