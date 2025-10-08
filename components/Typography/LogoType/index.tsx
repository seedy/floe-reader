import { VariantProps } from "class-variance-authority";
import { headingVariants } from "components/Typography/variants";
import { joinCn } from "helpers/cn";
import { ReactNode, Ref } from "react";

interface LogoTypeProps extends VariantProps<typeof headingVariants> {
	children?: ReactNode;
	className?: string;
	ref?: Ref<HTMLSpanElement>;
}

const LogoType = ({
	children,
	className,
	color,
	align,
	variant = "h1",
	ref: forwardedRef,
	...props
}: LogoTypeProps) => {
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
};

export default LogoType;
