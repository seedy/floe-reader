import cn from "helpers/cn";
import { ReactNode, Ref } from "react";

interface QuoteProps {
	children: ReactNode;
	className?: string;
	ref?: Ref<HTMLDivElement>;
}

const Quote = ({ children, className, ref: forwardedRef }: QuoteProps) => (
	<div
		ref={forwardedRef}
		className={cn(
			"flex grow items-start pt-6",
			"justify-start",
			"flex-row lg:w-full lg:flex-col",
			className,
		)}
	>
		{children}
	</div>
);

export default Quote;
