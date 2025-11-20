import { Trigger } from "@radix-ui/react-tabs";
import cn from "helpers/cn";
import { ReactNode } from "react";

interface TabProps {
	value: string;
	children?: ReactNode;
	className?: string;
}

const Tab = ({ children, className, value }: TabProps) => (
	<Trigger value={value} asChild>
		<button
			className={cn(
				"flex items-center justify-center border-2 border-solid border-transparent bg-background px-6 py-1 text-center font-body text-button font-bold uppercase text-text outline-hidden",
				"data-[state=active]:bg-secondary-background",
				"first:rounded-l last:rounded-r",
				"focus-visible:border-y-secondary-background focus-visible:shadow-focus-large first:focus-visible:border-l-secondary-background last:focus-visible:border-r-secondary-background",
				className,
			)}
		>
			{children}
		</button>
	</Trigger>
);

export default Tab;
