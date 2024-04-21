import { TabsContent } from "@radix-ui/react-tabs";
import { ReactNode } from "react";

interface ContentProps {
	value: string;
	children?: ReactNode;
}
const Content = ({ value, children }: ContentProps) => (
	<TabsContent value={value}>{children}</TabsContent>
);

export default Content;
