import cn from "helpers/cn";
import Image from "next/image";
import type { ComponentProps } from "react";

// COMPONENTS
export interface LogoProps extends ComponentProps<typeof Image> {}

const Logo = ({ src, alt, className, ...props }: LogoProps) => (
	<Image
		className={cn("object-cover", className)}
		src={src}
		alt={alt}
		{...props}
	/>
);

export default Logo;
