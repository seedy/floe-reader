import { TabsContent } from "@radix-ui/react-tabs";
import { ReactNode } from "react";

interface ContentProps {
	value: string;
	children?: ReactNode;
	className?: string;
}
const Content = ({ value, className, children }: ContentProps) => (
	<TabsContent className={className} value={value}>
		{children}
	</TabsContent>
);

export default Content;
