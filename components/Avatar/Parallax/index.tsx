import Avatar from "components/Avatar";
import styles from "components/Avatar/Parallax/AvatarParallax.module.css";
import cn from "helpers/cn";
import { ComponentProps } from "react";

interface ParallaxAvatarProps extends ComponentProps<typeof Avatar> {}
const ParallaxAvatar = ({ className, ...props }: ParallaxAvatarProps) => (
	<Avatar
		{...props}
		className={cn(
			"hidden lg:inline-flex",
			"lg:aspect-social",
			"max-h-[80vh] w-[25vw] min-w-64 max-w-none",
			"sticky top-[10vh]",
			styles.root,
			className,
		)}
		sizes="(max-width: 1024px) 50vw, 25vw"
	/>
);

export default ParallaxAvatar;
