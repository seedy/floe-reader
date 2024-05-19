import P from "components/Typography/P";
import cn from "helpers/cn";
import { ReactNode } from "react";

interface QuoteBadgeProps {
	title: ReactNode;
	children: ReactNode;
	className?: string;
}
const QuoteBadge = ({ children, title, className }: QuoteBadgeProps) => (
	<div className={cn("relative w-fit", className)}>
		{children}
		<div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 self-center rounded-pill bg-secondaryBackground px-5 py-2">
			<P className="text-center" color="white">
				{title}
			</P>
		</div>
	</div>
);

export default QuoteBadge;
