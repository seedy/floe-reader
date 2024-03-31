import { VariantProps } from "class-variance-authority";
import { headingVariants } from "components/Typography/variants";
import { joinCn } from "helpers/cn";
import { ElementRef, ReactNode, forwardRef } from "react";

interface H3Props extends VariantProps<typeof headingVariants> {
	children?: ReactNode;
	className?: string;
}

const H3 = forwardRef<ElementRef<"h3">, H3Props>(
	({ children, className, color, align, ...props }, forwardedRef) => {
		const headingVariantClassName = headingVariants({
			variant: "h3",
			color,
			align,
		});

		return (
			<h3
				ref={forwardedRef}
				className={joinCn(headingVariantClassName, className)}
				{...props}
			>
				{children}
			</h3>
		);
	},
);

H3.displayName = "H3";

export default H3;
