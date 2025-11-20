import IconButton from "components/IconButton";
import { useContainerIntersecting } from "components/IconButton/Floating/useContainerIntersecting";
import cn from "helpers/cn";
import { ComponentProps, RefObject } from "react";

interface IconButtonFloatingProps
	extends Omit<ComponentProps<typeof IconButton>, "size" | "variant"> {
	container?: RefObject<HTMLElement | null>;
}
const IconButtonFloating = ({
	className,
	children,
	container,
	...props
}: IconButtonFloatingProps) => {
	const isIntersecting = useContainerIntersecting({ container });

	if (!isIntersecting) return null;

	return (
		<IconButton
			className={cn(
				"fixed",
				"lg:bottom-6 lg:right-24",
				"bottom-24 right-6",
				"animate-fly hover:[animation-play-state:paused]",
				className,
			)}
			size="medium"
			variant="contained"
			{...props}
		>
			{children}
		</IconButton>
	);
};

export default IconButtonFloating;
