import styles from "components/Flex/Flex.module.css";
import cn from "helpers/cn";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import { ComponentProps, forwardRef } from "react";

interface FlexProps extends ComponentProps<"div"> {
	direction?: "row" | "column";
	align?: "center" | "start" | "end" | "space-between";
	justify?: "center" | "start" | "end" | "space-between";
	grow?: boolean;
}

const Flex = forwardRef<HTMLDivElement, FlexProps>(
	(
		{ children, direction, align, justify, grow, className, ...props },
		forwardedRef,
	) => {
		const variantsClassName = variantsToClassNameStyles(
			{ direction, align, justify, grow },
			styles,
		);
		return (
			<div
				className={cn(styles.root, variantsClassName, className)}
				ref={forwardedRef}
				{...props}
			>
				{children}
			</div>
		);
	},
);

Flex.displayName = "Flex";

export default Flex;
