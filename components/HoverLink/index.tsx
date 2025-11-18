import Button from "components/Button";
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

interface HoverLinkRootProps
	extends Omit<ComponentProps<"a">, "href">,
		Required<Pick<ComponentProps<"a">, "href">> {
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

		const xPercentage = Math.min(100, Math.max(100 - xOfWidth * 100, 0)) - 50;
		const yPercentage = Math.min(100, Math.max(100 - yOfHeight * 100, 0)) - 100;

		setImageTranslatePercentage({ x: xPercentage, y: yPercentage });
	};

	return (
		<a
			ref={anchorRef}
			className={cn("group relative flex grow", className)}
			onMouseMove={onMouseMove}
			style={
				{
					"--hover-link-x": `${imageTranslatePercentage.x}%`,
					"--hover-link-y": `${imageTranslatePercentage.y}%`,
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
	return (
		<div className={cn("lg:max-w-1/2 text-justify", className)}>{children}</div>
	);
};

interface HoverLinkImageProps
	extends Omit<ComponentProps<typeof Image>, "alt"> {}
export const HoverLinkImage = ({
	className,
	src,
	...props
}: HoverLinkImageProps) => {
	return (
		<Image
			className={cn(
				"rounded-md",
				"lg:absolute lg:z-1 left-1/2 top-1/2 transition-[opacity,rotate, scale] duration-500",
				"lg:motion-safe:scale-0 lg:group-hover:scale-100",
				"lg:opacity-0 lg:group-hover:opacity-100",
				"lg:motion-safe:-rotate-12 lg:motion-safe:group-hover:rotate-12",
				"lg:translate-x-(--hover-link-x) lg:translate-y-(--hover-link-y)",
				"lg:hover:scale-200 lg:motion-safe:group-hover:hover:rotate-0",
				className,
			)}
			src={src}
			alt=""
			{...props}
		/>
	);
};

export const HoverLinkButton = ({
	className,
	children,
	...props
}: ComponentProps<typeof Button>) => (
	<Button
		className={cn(
			"transition-[opacity,translate] duration-500",
			"lg:invisible lg:group-hover:visible",
			"lg:opacity-0 lg:group-hover:opacity-100",
			"lg:motion-safe:-translate-x-1/4 lg:group-hover:translate-x-0",
			"hover:cursor-pointer",
			className,
		)}
		{...props}
	>
		{children}
	</Button>
);
