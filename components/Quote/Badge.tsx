import P from "components/Typography/P";
import { ReactNode } from "react";

interface QuoteBadgeProps {
	title: ReactNode;
	children: ReactNode;
}
const QuoteBadge = ({ children, title }: QuoteBadgeProps) => (
	<div className="relative w-fit">
		{children}
		<div className="absolute top-0 -translate-y-1/2 self-center bg-secondaryBackground px-5 py-2">
			<P className="text-center" color="white">
				{title}
			</P>
		</div>
	</div>
);

export default QuoteBadge;
