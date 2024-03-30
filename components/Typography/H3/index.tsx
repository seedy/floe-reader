import { headingVariants } from "components/Typography/variants";
import cn from "helpers/cn";
import { ComponentProps, ElementRef, forwardRef } from "react";

interface H3Props extends ComponentProps<"h3"> {}

const headingVariantClassName = headingVariants({ variant: "h3" });

const H3 = forwardRef<ElementRef<"h3">, H3Props>(
	({ children, className, ...props }, forwardedRef) => (
		<h3
			ref={forwardedRef}
			className={cn(headingVariantClassName, className)}
			{...props}
		>
			{children}
		</h3>
	),
);

H3.displayName = "H3";

export default H3;
