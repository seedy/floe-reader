import { headingVariants } from "components/Typography/variants";
import cn from "helpers/cn";
import { ComponentProps, ElementRef, forwardRef } from "react";

type H1Props = ComponentProps<"h1">;

const headingVariantClassName = headingVariants({ variant: "h1" });

const H1 = forwardRef<ElementRef<"h1">, H1Props>(
	({ children, className, ...props }, forwardedRef) => (
		<h1
			ref={forwardedRef}
			className={cn(headingVariantClassName, className)}
			{...props}
		>
			{children}
		</h1>
	),
);

H1.displayName = "H1";

export default H1;
