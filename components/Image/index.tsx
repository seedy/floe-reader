import cn from "helpers/cn";
import NextImage from "next/image";
import type { ComponentProps } from "react";

// CONSTANTS

// COMPONENTS
export interface ImageProps
	extends Omit<ComponentProps<typeof NextImage>, "quality"> {}

const Image = ({
	src,
	alt,
	className,
	placeholder = "blur",
	...props
}: ImageProps) => (
	<NextImage
		className={cn("block rounded-none object-cover", className)}
		src={src}
		alt={alt}
		placeholder={placeholder}
		quality={100}
		{...props}
	/>
);

export default Image;
