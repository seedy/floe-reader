import classNames from "helpers/classNames";
import styles from "components/Typography/Handwritten/Handwritten.module.css";
import { Bilbo_Swash_Caps } from "next/font/google";
import { ComponentProps, ElementRef, forwardRef } from "react";

const handwritten = Bilbo_Swash_Caps({
	weight: "400",
	subsets: ["latin"],
	style: "normal",
});

const Handwritten = forwardRef<ElementRef<"h1">, ComponentProps<"h1">>(
	({ children, className, ...rest }, forwardedRef) => {
		return (
			<h1
				ref={forwardedRef}
				className={classNames(className, handwritten.className, styles.root)}
				{...rest}
			>
				{children}
			</h1>
		);
	},
);

Handwritten.displayName = "Handwritten";

export default Handwritten;
