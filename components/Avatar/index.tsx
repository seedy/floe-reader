import { VariantProps, cva } from "class-variance-authority";
import cn from "helpers/cn";
import Image from "next/image";
import { ComponentProps } from "react";

// VARIANTS
const avatarVariants = cva(
	"inline-flex aspect-auto h-auto w-full rounded-avatar object-cover",
	{
		variants: {
			selected: {
				true: ["shadow-selected outline outline-[0.25rem] outline-fernGreen"],
			},
		},
		defaultVariants: {
			selected: false,
		},
	},
);

// COMPONENTS
export interface AvatarProps
	extends VariantProps<typeof avatarVariants>,
		ComponentProps<typeof Image> {}

const Avatar = ({ src, alt, className, ...props }: AvatarProps) => {
	const variantsClassName = avatarVariants(props);
	return (
		<Image
			className={cn(variantsClassName, className)}
			src={src}
			alt={alt}
			quality={100}
			placeholder="blur"
			{...props}
		/>
	);
};

export default Avatar;
