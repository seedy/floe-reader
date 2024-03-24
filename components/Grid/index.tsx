import { ReactNode } from "react";
import styles from "components/Grid/Grid.module.css";
import classNames from "helpers/classNames";

interface GridProps {
	children: ReactNode;
	cols: number;
	className: string;
}
const Grid = ({ children, cols, className }: GridProps) => (
	<div
		className={classNames(styles.root, className)}
		style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
	>
		{children}
	</div>
);

export default Grid;
