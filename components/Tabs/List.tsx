import { List as RList } from "@radix-ui/react-tabs";
import cn from "helpers/cn";
import { ReactNode } from "react";

interface ListProps {
	className?: string;
	children?: ReactNode;
}
const List = ({ className, children }: ListProps) => (
	<RList loop={false} className={cn("flex", className)}>
		{children}
	</RList>
);

export default List;
