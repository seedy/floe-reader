import Image from "components/Image";
import cn from "helpers/cn";
import {
	CSSProperties,
	ComponentProps,
	MouseEventHandler,
	ReactNode,
	Ref,
	useImperativeHandle,
	useRef,
	useState,
} from "react";

interface HoverLinkRootProps {
	children: ReactNode;
	className?: string;
	ref?: Ref<HTMLAnchorElement>;
}
export const HoverLinkRoot = ({
	children,
	className,
	ref,
	...props
}: HoverLinkRootProps) => {
	const anchorRef = useRef<HTMLAnchorElement>(null);

	useImperativeHandle(ref, () => anchorRef.current!, []);

	const [imageTranslatePercentage, setImageTranslatePercentage] = useState({
		x: 0,
		y: 0,
	});

	const onMouseMove: MouseEventHandler<HTMLAnchorElement> = (e) => {
		const { clientX, clientY } = e;
		const anchorRect = anchorRef.current?.getBoundingClientRect();
		if (!anchorRect) return;
		const { width, height, left, top } = anchorRect;

		const mouseX = clientX - left;
		const mouseY = clientY - top;

		const xOfWidth = mouseX / width;
		const yOfHeight = mouseY / height;

		const xPercentage = Math.min(100, Math.max(xOfWidth * 100, 0));
		const yPercentage = Math.min(100, Math.max(yOfHeight * 100, 0));

		setImageTranslatePercentage({ x: xPercentage, y: yPercentage });
	};

	return (
		<a
			ref={anchorRef}
			className={cn("group relative flex", className)}
			onMouseMove={onMouseMove}
			style={
				{
					"--hover-link-translate-x": imageTranslatePercentage.x,
					"--hover-link-translate-y": imageTranslatePercentage.y,
				} as CSSProperties
			}
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
				"absolute left-1/2 top-1/2",
				"translate-x-(--hover-link-translate-x)",
				className,
			)}
			src={src}
			alt={alt}
			{...props}
		/>
	);
};
