import { List, Root } from "@radix-ui/react-tabs";
import { ReactNode } from "react";

interface TabsProps {
	items?: ReactNode;
	children?: ReactNode;
	value: string;
	onChange: (value: string) => void;
}
const Tabs = ({ items, children, value, onChange }: TabsProps) => (
	<Root value={value} onValueChange={onChange}>
		<List loop={false} className="flex">
			{items}
		</List>
		{children}
	</Root>
);

export default Tabs;
