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
				"flex items-center justify-center border-[0.125rem] border-solid border-transparent bg-background px-6 py-1 text-center font-body text-button font-bold uppercase text-text outline-none",
				"data-[state=active]:bg-outlineSecondary",
				"first:rounded-l last:rounded-r",
				"focus-visible:border-y-secondaryBackground focus-visible:shadow-focusLarge first:focus-visible:border-l-secondaryBackground last:focus-visible:border-r-secondaryBackground",
				className,
			)}
		>
			{children}
		</button>
	</Trigger>
);

export default Tab;
