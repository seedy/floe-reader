import { headingVariants } from "components/Typography/variants";
import cn from "helpers/cn";
import type { ComponentProps } from "react";

interface SubtitleProps extends ComponentProps<"span"> {}

const headingVariantClassName = headingVariants({ variant: "subtitle" });

const Subtitle = ({ className, children, ...props }: SubtitleProps) => {
	return (
		<span className={cn(headingVariantClassName, className)} {...props}>
			{children}
		</span>
	);
};

export default Subtitle;
