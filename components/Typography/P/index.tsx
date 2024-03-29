import cn from "helpers/cn";
import type { ComponentProps } from "react";

interface PProps extends ComponentProps<"p"> {}

const P = ({ className, children, ...props }: PProps) => {
	return (
		<p
			className={cn(
				"block text-body font-[inherit] text-text font-normal m-0",
				className,
			)}
			{...props}
		>
			{children}
		</p>
	);
};

export default P;
