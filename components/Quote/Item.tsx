import { cx } from "class-variance-authority";
import Button from "components/Button";
import P from "components/Typography/P";
import cn from "helpers/cn";
import { ReactNode } from "react";

interface QuoteItemProps {
	title: ReactNode;
	price?: ReactNode;
	perks: string[];
	children?: ReactNode;
	className?: string;
}
const QuoteItem = ({
	title,
	price,
	perks,
	children,
	className,
}: QuoteItemProps) => (
	<div className={cn("flex flex-col justify-end gap-3", className)}>
		<div className="flex min-h-[30rem] shrink-0 flex-col items-center gap-10 rounded-quote border border-primary bg-transparent px-3 py-8">
			<div className="flex grow flex-col items-center justify-between">
				{title}
				{price}
				<ul className="list-inside list-disc whitespace-nowrap">
					{perks.map((perk, index) => (
						<li key={perk}>
							<P className={cx("inline", index === 0 && "font-bold")}>{perk}</P>
						</li>
					))}
				</ul>
			</div>
			<Button variant="outlined" color="primary" className="whitespace-nowrap">
				Je choisis ce format
			</Button>
		</div>
		{children}
	</div>
);

export default QuoteItem;
