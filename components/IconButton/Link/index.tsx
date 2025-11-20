import { VariantProps } from "class-variance-authority";
import { iconButtonVariants } from "components/IconButton/variants";
import cn from "helpers/cn";
import { ComponentProps, ReactNode } from "react";

interface IconButtonLinkProps extends ComponentProps<"a">, VariantProps<typeof iconButtonVariants> {
	children?: ReactNode;
}
const IconButtonLink = ({
	children,
	size = "medium",
	variant = "outlined",
	className,
	ref,
	...props
}: IconButtonLinkProps) => {
	const iconButtonVariantsClassName = iconButtonVariants({ size, variant });

	return (
		<a
			ref={ref}
			className={cn(iconButtonVariantsClassName, className)}
			{...props}
		>
			{children}
		</a>
	);
};

export default IconButtonLink;
