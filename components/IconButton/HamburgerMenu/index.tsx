import IconButton from "components/IconButton";
import cn from "helpers/cn";
import { ComponentProps } from "react";

const IconButtonHamburgerMenu = ({
	className,
	ref: forwardedRef,
	...props
}: ComponentProps<typeof IconButton>) => (
	<IconButton ref={forwardedRef} className={cn("group", className)} {...props}>
		<div className="relative">
			<span className="absolute inset-x-0 top-0 h-px bg-current transition-[rotate,top] duration-300 group-data-[state=open]:top-1/2 group-data-[state=open]:rotate-45" />
			<span className="absolute inset-x-0 top-1/2 h-px bg-current transition-[opacity,blur] duration-300 group-data-[state=open]:blur-xs group-data-[state=open]:opacity-0" />
			<span className="absolute inset-x-0 bottom-0 h-px bg-current transition-[rotate,top] duration-300 group-data-[state=open]:top-1/2 group-data-[state=open]:-rotate-45" />
		</div>
	</IconButton>
);

export default IconButtonHamburgerMenu;
