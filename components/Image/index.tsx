import NextImage from "next/image";
import type { ComponentProps } from "react";
import cn from "helpers/cn";

// CONSTANTS

// COMPONENTS
export interface ImageProps extends ComponentProps<typeof NextImage> {}

const Image = ({ src, alt, className, ...props }: ImageProps) => (
	<NextImage
		className={cn("block object-cover rounded-none", className)}
		src={src}
		alt={alt}
		placeholder="blur"
		{...props}
	/>
);

export default Image;
