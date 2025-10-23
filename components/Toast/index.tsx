import { Cross2Icon } from "@radix-ui/react-icons";
import { Close, Description, Root, Title } from "@radix-ui/react-toast";
import { VariantProps, cva } from "class-variance-authority";
import IconButton from "components/IconButton";
import styles from "components/Toast/Toast.module.scss";
import cn from "helpers/cn";
import { ComponentProps, type ReactNode } from "react";

const toastVariants = cva(
	"relative flex items-center justify-between gap-x-4 overflow-hidden rounded-mdbg-background p-4 outline-solid outline-2",
	{
		variants: {
			variant: {
				error: ["outline-error"],
				success: ["outline-secondary-background"],
			},
		},
	},
);

interface ToastProps
	extends VariantProps<typeof toastVariants>,
		ComponentProps<typeof Root> {
	title: string;
	children?: ReactNode;
}
const Toast = ({
	title,
	children,
	ref: forwardedRef,
	variant,
	...props
}: ToastProps) => {
	const variantsClassName = toastVariants({ variant });
	return (
		<Root
			className={cn(styles.root, variantsClassName)}
			ref={forwardedRef}
			{...props}
		>
			<div className="flex flex-col gap-4 overflow-hidden">
				<Title className="text-body font-medium text-text">{title}</Title>
				{children && (
					<Description className="m-0 truncate text-text">
						{children}
					</Description>
				)}
			</div>
			<Close
				className="absolute right-2.5 self-center"
				asChild
				aria-label="Fermer"
			>
				<IconButton size="small" type="button">
					<Cross2Icon />
				</IconButton>
			</Close>
		</Root>
	);
};

export default Toast;
