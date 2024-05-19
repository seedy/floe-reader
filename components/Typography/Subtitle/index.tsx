import { VariantProps } from "class-variance-authority";
import { headingVariants } from "components/Typography/variants";
import { joinCn } from "helpers/cn";
import type { ReactNode } from "react";

interface SubtitleProps extends VariantProps<typeof headingVariants> {
	children?: ReactNode;
	className?: string;
}

const Subtitle = ({
	className,
	children,
	color,
	align,
	...props
}: SubtitleProps) => {
	const headingVariantClassName = headingVariants({
		variant: "subtitle",
		color,
		align,
	});

	return (
		<span className={joinCn(headingVariantClassName, className)} {...props}>
			{children}
		</span>
	);
};

export default Subtitle;
