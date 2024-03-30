import { headingVariants } from "components/Typography/variants";
import cn from "helpers/cn";
import { Bilbo_Swash_Caps } from "next/font/google";
import { ComponentProps, ElementRef, forwardRef } from "react";

const handwritten = Bilbo_Swash_Caps({
	weight: "400",
	subsets: ["latin"],
	style: "normal",
});

const headingVariantClassName = headingVariants({ variant: "handwritten" });

const Handwritten = forwardRef<ElementRef<"h1">, ComponentProps<"h1">>(
	({ children, className, ...rest }, forwardedRef) => {
		return (
			<h1
				ref={forwardedRef}
				className={cn(
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
