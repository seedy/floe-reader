import cn from "helpers/cn";
import { Lora, Urbanist } from "next/font/google";
import { ComponentProps, ReactNode } from "react";

const lora = Lora({
	subsets: ["latin"],
	style: ["normal"],
	variable: "--font-lora",
});
const urbanist = Urbanist({
	subsets: ["latin"],
	style: ["normal"],
	variable: "--font-urbanist",
});
interface RootProps extends ComponentProps<"div"> {
	children?: ReactNode;
}
const Root = ({ children, className, ...props }: RootProps) => (
	<div
		className={cn(
			"size-full min-h-svh bg-background p-4",
			lora.variable,
			urbanist.variable,
			className,
		)}
		{...props}
	>
		{children}
	</div>
);

export default Root;
