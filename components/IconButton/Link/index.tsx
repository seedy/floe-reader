import { iconButtonVariants } from "components/IconButton/variants";
import cn from "helpers/cn";
import { ComponentProps, ReactNode } from "react";

interface IconButtonLinkProps extends ComponentProps<"a"> {
	children?: ReactNode;
	size?: "small" | "medium" | "large";
}
const IconButtonLink = ({
	children,
	size = "medium",
	className,
	ref,
	...props
}: IconButtonLinkProps) => {
	const iconButtonVariantsClassName = iconButtonVariants({ size });

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
