import Image from "components/Image";
import cn from "helpers/cn";
import { ComponentProps, MouseEventHandler, ReactNode, useRef } from "react";

interface HoverLinkRootProps {
	children: ReactNode;
	className?: string;
}
export const HoverLinkRoot = ({
	children,
	className,
	...props
}: HoverLinkRootProps) => {
	const anchorRef = useRef<HTMLAnchorElement>(null);

	const onMouseMove: MouseEventHandler<HTMLAnchorElement> = (e) => {
		const { clientX, clientY } = e;
		const anchorRect = anchorRef.current?.getBoundingClientRect();
	};

	return (
		<a
			ref={anchorRef}
			className={cn("group relative flex", className)}
			onMouseMove={onMouseMove}
			{...props}
		>
			{children}
		</a>
	);
};

interface HoverLinkContentProps {
	children: ReactNode;
	className?: string;
}
export const HoverLinkContent = ({
	children,
	className,
}: HoverLinkContentProps) => {
	return <div className={cn("z-1", className)}>{children}</div>;
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
			className={cn(
				"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
				className,
			)}
			src={src}
			alt={alt}
			{...props}
		/>
	);
};
