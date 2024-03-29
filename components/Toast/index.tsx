import { Cross2Icon } from "@radix-ui/react-icons";
import { Close, Description, Root, Title } from "@radix-ui/react-toast";
import { type ElementRef, forwardRef, type ReactNode } from "react";
import IconButton from "components/IconButton";
import styles from "components/Toast/Toast.module.scss";
import classNames from "helpers/classNames";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";

interface ToastProps {
	title: string;
	children?: ReactNode;
	variant?: "success" | "error";
}
const Toast = forwardRef<ElementRef<typeof Root>, ToastProps>(
	({ title, children, variant = "success", ...props }, forwardedRef) => {
		const variantsClassName = variantsToClassNameStyles({ variant }, styles);
		return (
			<Root
				className={classNames(styles.root, variantsClassName)}
				ref={forwardedRef}
				{...props}
			>
				<div className="flex flex-col">
					<Title className={styles.title}>{title}</Title>
					<Description className={styles.description}>{children}</Description>
				</div>
				<Close asChild aria-label="Fermer">
					<IconButton variant="small" type="button">
						<Cross2Icon />
					</IconButton>
				</Close>
			</Root>
		);
	},
);

Toast.displayName = "Toast";

export default Toast;
