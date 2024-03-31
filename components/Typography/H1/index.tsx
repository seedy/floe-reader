import { VariantProps } from "class-variance-authority";
import { headingVariants } from "components/Typography/variants";
import { joinCn } from "helpers/cn";
import { ElementRef, ReactNode, forwardRef } from "react";

interface H1Props extends VariantProps<typeof headingVariants> {
	children?: ReactNode;
	className?: string;
}

const H1 = forwardRef<ElementRef<"h1">, H1Props>(
	({ children, className, color, align, ...props }, forwardedRef) => {
		const headingVariantClassName = headingVariants({
			variant: "h1",
			color,
			align,
		});

		return (
			<h1
				ref={forwardedRef}
				className={joinCn(headingVariantClassName, className)}
				{...props}
			>
				{children}
			</h1>
		);
	},
);

H1.displayName = "H1";

export default H1;
