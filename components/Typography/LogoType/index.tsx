import { VariantProps } from "class-variance-authority";
import { headingVariants } from "components/Typography/variants";
import { joinCn } from "helpers/cn";
import { ElementRef, ReactNode, forwardRef } from "react";

interface LogoTypeProps extends VariantProps<typeof headingVariants> {
	children?: ReactNode;
	className?: string;
}

const LogoType = forwardRef<ElementRef<"h1">, LogoTypeProps>(
	(
		{ children, className, color, align, variant = "h1", ...props },
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
				className={joinCn(
					headingVariantClassName,
					"whitespace-nowrap",
					className,
				)}
				{...props}
			>
				{children}
			</span>
		);
	},
);

LogoType.displayName = "LogoType";

export default LogoType;
