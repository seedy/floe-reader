import cn from "helpers/cn";
import { ReactNode } from "react";

interface QuoteItemProps {
	title: ReactNode;
	description: ReactNode;
	image: ReactNode;
	cta: ReactNode;
	children?: ReactNode;
	className?: string;
}
const QuoteItem = ({
	title,
	description,
	image,
	cta,
	children,
	className,
}: QuoteItemProps) => (
	<div className={cn("flex grow flex-col justify-end gap-3", className)}>
		<div
			className={cn(
				"flex shrink-0 items-center gap-10 bg-transparent px-3 py-8",
				"border-primary/40 hover:border-primary active:border-primary",
				"flex-col lg:flex-row",
				"rounded-quote lg:rounded-none",
				"border-2 lg:border-0 lg:border-b-2",
				"min-h-153 lg:min-h-80",
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
			{image}
			{cta}
		</div>
		{children}
	</div>
);

export default QuoteItem;
