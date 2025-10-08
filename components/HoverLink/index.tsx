import Image from "components/Image";
import cn from "helpers/cn";
import { ComponentProps, ReactNode } from "react";

interface HoverLinkRootProps {
	children: ReactNode;
	className?: string;
}
export const HoverLinkRoot = ({
	children,
	className,
	...props
}: HoverLinkRootProps) => {
	return (
		<a className={cn("relative", className)} {...props}>
			{children}
		</a>
	);
};

interface HoverLinkImageProps extends ComponentProps<typeof Image> {}
export const HoverLinkImage = ({
	className,
	src,
	alt,
	...props
}: HoverLinkImageProps) => {
	return (
		<Image
			className={cn("absolute", className)}
			src={src}
			alt={alt}
			{...props}
		/>
	);
};
