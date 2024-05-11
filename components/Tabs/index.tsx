import { Root } from "@radix-ui/react-tabs";
import cn from "helpers/cn";
import { ReactNode } from "react";

interface TabsProps {
	items?: ReactNode;
	children?: ReactNode;
	value: string;
	onChange: (value: string) => void;
	className?: string;
}
const Tabs = ({ children, value, onChange, className }: TabsProps) => (
	<Root
		value={value}
		onValueChange={onChange}
		className={cn("flex flex-col", className)}
	>
		{children}
	</Root>
);

export default Tabs;
