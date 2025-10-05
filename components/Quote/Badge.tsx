import P from "components/Typography/P";
import cn from "helpers/cn";
import { ReactNode } from "react";

interface QuoteBadgeProps {
	title: ReactNode;
	children: ReactNode;
	className?: string;
}
const QuoteBadge = ({ children, title, className }: QuoteBadgeProps) => (
	<div className="relative">
		{children}
		<div
			className={cn(
				"absolute top-0 self-center rounded-pill bg-secondaryBackground px-5 py-2",
				"left-1/2 lg:left-0",
				"-translate-x-1/2 lg:translate-x-0",
				"translate-y-[-150%] lg:-translate-y-full",
				className,
			)}
		>
			<P className="text-center" color="white">
				{title}
			</P>
		</div>
	</div>
);

export default QuoteBadge;
