import cn from "helpers/cn";
import { ReactNode } from "react";

interface QuoteItemProps {
	title: ReactNode;
	description: ReactNode;
	cta: ReactNode;
	children?: ReactNode;
	className?: string;
}
const QuoteItem = ({
	title,
	description,
	cta,
	children,
	className,
}: QuoteItemProps) => (
	<div className={cn("flex grow flex-col justify-end gap-3", className)}>
		<div
			className={cn(
				"flex shrink-0 items-center gap-10 border-primary bg-transparent px-3 py-8",
				"flex-col lg:flex-row",
				"rounded-quote lg:rounded-none",
				"border lg:border-0 lg:border-b",
				"min-h-[30rem] lg:min-h-0",
				"max-w-xs lg:max-w-none",
			)}
		>
			<div
				className={cn(
					"flex grow flex-col gap-12",
					"items-center lg:items-start",
				)}
			>
				{title}
				{description}
			</div>
			{cta}
		</div>
		{children}
	</div>
);

export default QuoteItem;
