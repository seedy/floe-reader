import { type VariantProps, cva } from "class-variance-authority";
import cn from "helpers/cn";
import type { ReactNode } from "react";

const spanUnderlineVariants = cva(
	"relative after:absolute after:bottom-0 after:left-1/2 after:h-2 after:w-[90%] after:-translate-x-1/2 after:rounded after:bg-[length:100%_100%] after:bg-no-repeat",
	{
		variants: {
			variant: {
				primary: [
					"after:bg-gradient-to-r after:from-outlineSecondary after:to-outlineSecondary",
				],
				secondary: [
					"after:bg-gradient-to-r after:from-fernGreenUnderline after:to-fernGreenUnderline",
				],
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	},
);

interface SpanUnderlineProps
	extends VariantProps<typeof spanUnderlineVariants> {
	children?: ReactNode;
	className?: string;
}
const SpanUnderline = ({
	children,
	className,
	...props
}: SpanUnderlineProps) => {
	const variantsClassName = spanUnderlineVariants(props);

	return (
		<span className={cn(variantsClassName, className)} {...props}>
			{children}
		</span>
	);
};

export default SpanUnderline;
