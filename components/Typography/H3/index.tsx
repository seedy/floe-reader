import { VariantProps } from "class-variance-authority";
import { headingVariants } from "components/Typography/variants";
import { joinCn } from "helpers/cn";
import { ComponentProps, ReactNode } from "react";

interface H3Props
	extends VariantProps<typeof headingVariants>,
		Omit<ComponentProps<"h3">, "color"> {
	children?: ReactNode;
	className?: string;
}

const H3 = ({
	children,
	className,
	color,
	align,
	variant = "h3",
	ref: forwardedRef,
	...props
}: H3Props) => {
	const headingVariantClassName = headingVariants({
		variant,
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
};

export default H3;
