import { Close, Content, Title } from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import IconButton from "components/IconButton";
import H2 from "components/Typography/H2";
import cn from "helpers/cn";
import { ComponentProps, ReactNode } from "react";

interface DialogContentProps extends ComponentProps<typeof Content> {
	className?: string;
	children?: ReactNode;
}
export const DialogContent = ({
	className,
	children,
	...props
}: DialogContentProps) => (
	<Content
		className={cn(
			"fixed left-1/2 top-1/2 m-0 flex max-h-[85vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 flex-col items-start gap-8 rounded-mdborder-[0.125rem] border-solid border-secondary-background bg-background p-4",
			className,
		)}
		{...props}
	>
		{children}
	</Content>
);

interface DialogTitleProps {
	className?: string;
	children?: ReactNode;
}
export const DialogTitle = ({ children, className }: DialogTitleProps) => (
	<Title asChild>
		<H2 color="secondary" className={className}>
			{children}
		</H2>
	</Title>
);

export const DialogClose = () => (
	<Close asChild aria-label="Fermer">
		<IconButton className="absolute right-0 top-0" size="small" type="button">
			<Cross2Icon />
		</IconButton>
	</Close>
);
