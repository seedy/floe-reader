import P from "components/Typography/P";
import cn from "helpers/cn";
import { ReactNode } from "react";

interface QuoteItemProps {
	title: ReactNode;
	perks: (string | ReactNode)[];
	cta: ReactNode;
	children?: ReactNode;
	className?: string;
}
const QuoteItem = ({
	title,
	perks,
	cta,
	children,
	className,
}: QuoteItemProps) => (
	<div className={cn("flex flex-col justify-end gap-3", className)}>
		<div className="flex min-h-[30rem] shrink-0 flex-col items-center gap-10 rounded-quote border border-primary bg-transparent px-3 py-8">
			<div className="flex grow flex-col items-center gap-12">
				{title}
				<ul className="list-inside list-checkmark whitespace-nowrap">
					{perks.map((perk, index) => (
						<li key={index}>
							<P inline>{perk}</P>
						</li>
					))}
				</ul>
			</div>
			{cta}
		</div>
		{children}
	</div>
);

export default QuoteItem;
