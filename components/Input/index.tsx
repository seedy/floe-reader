import cn from "helpers/cn";
import { ComponentProps, ReactNode, useId } from "react";

// COMPONENTS
export interface InputProps extends ComponentProps<"input"> {
	label: string;
	children?: ReactNode;
}

const Input = ({
	className,
	label,
	placeholder,
	id,
	children,
	type = "text",
	...props
}: InputProps) => {
	const fallbackId = useId();

	const finalId = id ?? fallbackId;

	return (
		<div
			className={cn(
				"group min-w-48 relative inline-flex items-center bg-tertiary rounded-input transition",
				"hover:bg-tertiaryHoveredField",
				"after:left-0 after:-bottom-[0.125rem] after:right-0 after:absolute after:pointer-events-none after:h-[0.125rem] after:bg-secondaryBackground after:transition after:origin-left after:scale-x-0",
				"focus-within:bg-white focus-within:hover:bg-white focus-within:after:scale-x-100 focus-within:after:translate-x-0",
			)}
		>
			<input
				id={finalId}
				type={type}
				placeholder={placeholder}
				className={cn(
					"w-full min-h-6 min-w-64 text-start indent-0 font-[inherit] text-body font-normal inline-block m-0 pt-7 px-4 pb-1 bg-transparent border-none outline-none",
					"text-text shadow-input",
					"focus:text-secondaryBackground focus:shadow-inputFocus",
					"placeholder:text-text",
					className,
				)}
				{...props}
			/>
			<label
				className={cn(
					"absolute left-4 top-2 m-0 bg-transparent p-0 font-[inherit] text-label font-normal text-text transition-transform origin-top-left",
					"group-focus-within:text-secondaryBackground group-focus-within:-translate-y-1 group-focus-within:scale-75",
				)}
				htmlFor={finalId}
			>
				{label}
			</label>
			{children}
		</div>
	);
};

export default Input;
