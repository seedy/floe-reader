import { Cross2Icon } from "@radix-ui/react-icons";
import { Close, Description, Root, Title } from "@radix-ui/react-toast";
import { VariantProps, cva } from "class-variance-authority";
import IconButton from "components/IconButton";
import styles from "components/Toast/Toast.module.scss";
import cn from "helpers/cn";
import { type ElementRef, type ReactNode, forwardRef } from "react";

const toastVariants = cva(
	"flex items-center justify-between gap-x-4 rounded bg-background p-4 outline outline-[0.125rem]",
	{
		variants: {
			variant: {
				error: ["outline-error"],
				success: ["outline-secondaryBackground"],
			},
		},
	},
);

interface ToastProps extends VariantProps<typeof toastVariants> {
	title: string;
	children?: ReactNode;
}
const Toast = forwardRef<ElementRef<typeof Root>, ToastProps>(
	({ title, children, ...props }, forwardedRef) => {
		const variantsClassName = cva(props);
		return (
			<Root
				className={cn(styles.root, variantsClassName)}
				ref={forwardedRef}
				{...props}
			>
				<div className="flex flex-col">
					<Title className="mb-4 text-body font-medium text-text">
						{title}
					</Title>
					<Description className="m-0 text-text">{children}</Description>
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
