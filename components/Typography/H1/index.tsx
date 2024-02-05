import styles from "components/Typography/H1/H1.module.css";
import classNames from "helpers/classNames";
import { ComponentProps, ElementRef, forwardRef } from "react";

type H1Props = ComponentProps<"h1">;

const H1 = forwardRef<ElementRef<"h1">, H1Props>(
	({ children, className, ...props }, forwardedRef) => (
		<h1
			ref={forwardedRef}
			className={classNames(className, styles.root)}
			{...props}
		>
			{children}
		</h1>
	),
);

H1.displayName = "H1";

export default H1;
