"use client";
import Avatar from "components/Avatar";
import styles from "components/Avatar/Parallax/AvatarParallax.module.css";
import cn from "helpers/cn";
import useSupportsViewTimeline from "hooks/useSupportsViewTimeline";
import dynamic from "next/dynamic";
import { ComponentProps } from "react";

const AvatarParallaxMotionViewTimeline = dynamic(
	() => import("components/Avatar/Parallax/MotionViewTimeline"),
);

const ParallaxAvatar = ({
	className,
	...props
}: ComponentProps<typeof Avatar>) => {
	const supportsViewTimeline = useSupportsViewTimeline();
	if (supportsViewTimeline) {
		return (
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
	}
	return (
		<AvatarParallaxMotionViewTimeline>
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
		</AvatarParallaxMotionViewTimeline>
	);
};

export default ParallaxAvatar;
