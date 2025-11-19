import cn from "helpers/cn";
import type { ComponentProps } from "react";

const Screen = ({
	className,
	children,
	...props
}: ComponentProps<"section">) => {
	return (
		<section
			className={cn("relative min-h-svh lg:min-h-[initial]", className)}
			{...props}
		>
			{children}
		</section>
	);
};

export default Screen;
