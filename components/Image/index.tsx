import cn from "helpers/cn";
import NextImage from "next/image";
import type { ComponentProps } from "react";

// CONSTANTS

// COMPONENTS
export interface ImageProps extends ComponentProps<typeof NextImage> {}

const Image = ({ src, alt, className, ...props }: ImageProps) => (
	<NextImage
		className={cn("block rounded-none object-cover", className)}
		src={src}
		alt={alt}
		placeholder="blur"
		quality={100}
		{...props}
	/>
);

export default Image;
