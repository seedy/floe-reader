import { VariantProps } from "class-variance-authority";
import { headingVariants } from "components/Typography/variants";
import { joinCn } from "helpers/cn";
import { Bilbo_Swash_Caps } from "next/font/google";
import { ElementRef, ReactNode, forwardRef } from "react";

const handwritten = Bilbo_Swash_Caps({
	weight: "400",
	subsets: ["latin"],
	style: "normal",
});

interface HandwrittenProps extends VariantProps<typeof headingVariants> {
	children?: ReactNode;
	className?: string;
}

const Handwritten = forwardRef<ElementRef<"h1">, HandwrittenProps>(
	(
		{ children, className, color, align, variant = "handwritten", ...rest },
		forwardedRef,
	) => {
		const headingVariantClassName = headingVariants({
			variant,
			color,
			align,
		});
		return (
			<h1
				ref={forwardedRef}
				className={joinCn(
					headingVariantClassName,
					handwritten.className,
					className,
				)}
				{...rest}
			>
				{children}
			</h1>
		);
	},
);

Handwritten.displayName = "Handwritten";

export default Handwritten;
