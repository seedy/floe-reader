import { VariantProps } from "class-variance-authority";
import { textVariants } from "components/Typography/variants";
import { joinCn } from "helpers/cn";
import type { ReactNode } from "react";

interface PProps extends VariantProps<typeof textVariants> {
	children?: ReactNode;
	className?: string;
}

const P = ({ className, children, color, inline, ...props }: PProps) => {
	const textVariantClassName = textVariants({ color, inline });

	return (
		<p className={joinCn(textVariantClassName, className)} {...props}>
			{children}
		</p>
	);
};

export default P;
