import cn from "helpers/cn";
import { ReactNode } from "react";

interface GridProps {
	children: ReactNode;
	cols: number;
	className: string;
}
const Grid = ({ children, cols, className }: GridProps) => (
	<div
		className={cn("grid grid-cols-[repeat(auto-fill,1fr)]", className)}
		style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
	>
		{children}
	</div>
);

export default Grid;
