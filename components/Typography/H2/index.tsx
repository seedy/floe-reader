import { headingVariants } from "components/Typography/variants";
import cn from "helpers/cn";
import { ComponentProps, ElementRef, forwardRef } from "react";

interface H2Props extends ComponentProps<"h2"> {}

const headingVariantClassName = headingVariants({ variant: "h2" });

const H2 = forwardRef<ElementRef<"h2">, H2Props>(
	({ children, className, ...props }, forwardedRef) => (
		<h2
			ref={forwardedRef}
			className={cn(headingVariantClassName, className)}
			{...props}
		>
			{children}
		</h2>
	),
);

H2.displayName = "H2";

export default H2;
