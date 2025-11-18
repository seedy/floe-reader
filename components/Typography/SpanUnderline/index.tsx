import { type VariantProps, cva } from "class-variance-authority";
import cn from "helpers/cn";
import type { ReactNode } from "react";

const spanUnderlineVariants = cva(
	"relative after:absolute after:bottom-0 after:left-1/2 after:h-2 after:w-[90%] after:-translate-x-1/2 after:rounded-mdafter:bg-size-[100%_100%] after:bg-no-repeat",
	{
		variants: {
			variant: {
				primary: [
					"after:bg-linear-to-r after:from-fern-green-underline after:to-fern-green-underline",
				],
				secondary: [
					"after:bg-linear-to-r after:from-outline-secondary after:to-outline-secondary",
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
