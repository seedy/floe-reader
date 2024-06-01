import Avatar from "components/Avatar";
import styles from "components/Avatar/Aside/Aside.module.css";
import cn from "helpers/cn";
import { ComponentProps } from "react";

interface AsideAvatarProps extends ComponentProps<typeof Avatar> {}
const AsideAvatar = ({ className, ...props }: AsideAvatarProps) => (
	// TODO: fixed size push text instead
	<Avatar
		{...props}
		className={cn(
			"hidden lg:inline-flex",
			"max-h-[calc(100svh-4rem)] w-[25vw] min-w-64 max-w-none",
			"sticky top-16",
			styles.root,
			className,
		)}
	/>
);

export default AsideAvatar;
