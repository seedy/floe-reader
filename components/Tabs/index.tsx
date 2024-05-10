import { List, Root } from "@radix-ui/react-tabs";
import cn from "helpers/cn";
import { ReactNode } from "react";

interface TabsProps {
	items?: ReactNode;
	children?: ReactNode;
	value: string;
	onChange: (value: string) => void;
	className?: string;
}
const Tabs = ({ items, children, value, onChange, className }: TabsProps) => (
	<Root value={value} onValueChange={onChange}>
		<List loop={false} className={cn("flex", className)}>
			{items}
		</List>
		{children}
	</Root>
);

export default Tabs;
