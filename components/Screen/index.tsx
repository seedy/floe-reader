import cn from "helpers/cn";
import type { ComponentProps } from "react";

interface ScreenProps extends ComponentProps<"div"> {}

const Screen = ({ className, children, ...props }: ScreenProps) => {
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
