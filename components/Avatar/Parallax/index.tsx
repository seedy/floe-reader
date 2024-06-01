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
			"max-h-[calc(100svh-4rem)] w-[25vw] min-w-64 max-w-none",
			"sticky top-16",
			className,
		)}
	/>
);

export default ParallaxAvatar;
