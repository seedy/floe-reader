import IconButton from "components/IconButton";
import cn from "helpers/cn";
import { ComponentProps, ElementRef, forwardRef } from "react";

interface IconButtonHamburgerMenuProps
	extends ComponentProps<typeof IconButton> {}
const IconButtonHamburgerMenu = forwardRef<
	ElementRef<typeof IconButton>,
	IconButtonHamburgerMenuProps
>(({ className, ...props }, forwardedRef) => (
	<IconButton ref={forwardedRef} className={cn("group", className)} {...props}>
		<div className="relative">
			<span className="absolute inset-x-0 top-0 h-px bg-current transition-all duration-300 group-data-[state=open]:top-1/2 group-data-[state=open]:rotate-45" />
			<span className="absolute inset-x-0 top-1/2 h-px bg-current transition-opacity duration-300 group-data-[state=open]:opacity-0" />
			<span className="absolute inset-x-0 bottom-0 h-px bg-current transition-all duration-300 group-data-[state=open]:top-1/2 group-data-[state=open]:-rotate-45" />
		</div>
	</IconButton>
));
IconButtonHamburgerMenu.displayName = "IconButtonHamburgerMenu";

export default IconButtonHamburgerMenu;
