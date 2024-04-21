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
				"flex items-center justify-center px-6 py-1 text-text text-center font-[inherit] text-button font-bold outline-none uppercase bg-background border-[0.125rem] border-solid border-transparent",
				"data-[state=active]:bg-outlineSecondary",
				"first:rounded-l last:rounded-r",
				"focus-visible:shadow-focusLarge focus-visible:border-t-secondaryBackground focus-visible:border-b-secondaryBackground first:focus-visible:border-l-secondaryBackground last:focus-visible:border-r-secondaryBackground",
				className,
			)}
		>
			{children}
		</button>
	</Trigger>
);

export default Tab;
