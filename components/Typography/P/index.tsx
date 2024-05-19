import { VariantProps } from "class-variance-authority";
import { textVariants } from "components/Typography/variants";
import { joinCn } from "helpers/cn";
import type { ReactNode } from "react";

interface PProps extends VariantProps<typeof textVariants> {
	children?: ReactNode;
	className?: string;
}

const P = ({ className, children, color, ...props }: PProps) => {
	const textVariantClassName = textVariants({ color });

	return (
		<p className={joinCn(textVariantClassName, className)} {...props}>
			{children}
		</p>
	);
};

export default P;
