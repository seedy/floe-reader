import cn from "helpers/cn";
import { ReactNode, forwardRef } from "react";

interface QuoteProps {
	children: ReactNode;
	className?: string;
}

const Quote = forwardRef<HTMLDivElement, QuoteProps>(
	({ children, className }, forwardedRef) => (
		<div
			ref={forwardedRef}
			className={cn(
				"flex grow items-start pt-6",
				"justify-start lg:justify-center",
				className,
			)}
		>
			{children}
		</div>
	),
);

Quote.displayName = "Quote";

export default Quote;
