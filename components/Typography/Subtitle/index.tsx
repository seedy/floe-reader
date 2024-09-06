import { VariantProps } from "class-variance-authority";
import { headingVariants } from "components/Typography/variants";
import { joinCn } from "helpers/cn";
import { ElementRef, type ReactNode, forwardRef } from "react";

interface SubtitleProps extends VariantProps<typeof headingVariants> {
	children?: ReactNode;
	className?: string;
}

const Subtitle = forwardRef<ElementRef<"span">, SubtitleProps>(
	(
		{ className, children, color, align, variant = "subtitle", ...props },
		forwardedRef,
	) => {
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
	},
);

Subtitle.displayName = "Subtitle";

export default Subtitle;
