import cn from "helpers/cn";
import type { ComponentProps } from "react";

interface SubtitleProps extends ComponentProps<"span"> {}

const Subtitle = ({ className, children, ...props }: SubtitleProps) => {
	return (
		<span
			className={cn(
				"inline-block text-subtitle font-[inherit] text-text font-bold m-0 text-center",
				className,
			)}
			{...props}
		>
			{children}
		</span>
	);
};

export default Subtitle;
