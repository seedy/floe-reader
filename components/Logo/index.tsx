import cn from "helpers/cn";
import Image from "next/image";
import type { ComponentProps } from "react";

// COMPONENTS
const Logo = ({ src, alt, className, ...props }: ComponentProps<typeof Image>) => (
	<Image
		className={cn("object-cover", className)}
		src={src}
		alt={alt}
		quality={100}
		{...props}
	/>
);

export default Logo;
