import Avatar from "components/Avatar";
import cn from "helpers/cn";
import { ComponentProps } from "react";

interface ParallaxAvatarProps extends ComponentProps<typeof Avatar> {}
const ParallaxAvatar = ({ className, ...props }: ParallaxAvatarProps) => (
	// TODO: implement parallax
	<Avatar
		{...props}
		className={cn(
			"hidden lg:inline-flex",
			"aspect-auto",
			"max-h-[calc(100svh-3rem)] w-[25vw] min-w-64 max-w-none",
			"sticky top-6 ml-10",
			className,
		)}
	/>
);

export default ParallaxAvatar;
