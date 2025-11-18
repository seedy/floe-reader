import { VariantProps } from "class-variance-authority";
import { headingVariants } from "components/Typography/variants";
import { joinCn } from "helpers/cn";
import { type ReactNode, Ref } from "react";

interface SubtitleProps extends VariantProps<typeof headingVariants> {
	children?: ReactNode;
	className?: string;
	ref?: Ref<HTMLSpanElement>;
}

const Subtitle = ({
	className,
	children,
	color,
	align,
	variant = "subtitle",
	ref: forwardedRef,
	...props
}: SubtitleProps) => {
	const headingVariantClassName = headingVariants({
		variant,
		color,
		align,
	});

	return (
		<span
			ref={forwardedRef}
			className={joinCn(headingVariantClassName, className)}
			{...props}
		>
			{children}
		</span>
	);
};

export default Subtitle;
