import styles from "components/Input/Input.module.scss";
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
		<div className={styles.root}>
			<input
				id={finalId}
				type={type}
				placeholder={placeholder}
				className={cn(styles.input, className)}
				{...props}
			/>
			<label className={styles.label} htmlFor={finalId}>
				{label}
			</label>
			{children}
		</div>
	);
};

export default Input;
