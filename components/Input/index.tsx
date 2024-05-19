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
				"group relative inline-flex min-w-48 items-center rounded-input bg-tertiary transition",
				"hover:bg-tertiaryHoveredField",
				"after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-secondaryBackground after:transition",
				"focus-within:bg-white focus-within:after:translate-x-0 focus-within:after:scale-x-100 focus-within:hover:bg-white",
			)}
		>
			<input
				id={finalId}
				type={type}
				placeholder={placeholder}
				className={cn(
					"m-0 inline-block min-h-6 w-full min-w-64 border-none bg-transparent px-4 pb-1 pt-7 text-start indent-0 font-[inherit] text-body font-normal outline-none",
					"text-text shadow-input",
					"focus:text-secondaryBackground focus:shadow-inputFocus",
					"placeholder:text-text",
					className,
				)}
				{...props}
			/>
			<label
				className={cn(
					"absolute left-4 top-2 m-0 origin-top-left bg-transparent p-0 font-[inherit] text-label font-normal text-text transition-transform",
					"group-focus-within:-translate-y-1 group-focus-within:scale-75 group-focus-within:text-secondaryBackground",
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
