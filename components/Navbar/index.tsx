"use client";

import { CalendarIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import ButtonLink from "components/Button/Link";
import IconButton from "components/IconButton";
import IconButtonLink from "components/IconButton/Link";
import LogoFull from "components/Logo/Full";
import Sidebar from "components/Navbar/Sidebar";
import useAnimateOnScroll from "components/Navbar/useAnimateOnScroll";
import { PORTFOLIO, SERVICES, ZCAL_FIRST } from "constants/links";
import cn from "helpers/cn";
import {
	ComponentProps,
	ElementRef,
	forwardRef,
	useImperativeHandle,
	useRef,
} from "react";

type NavbarProps = ComponentProps<"nav">;
const Navbar = forwardRef<ElementRef<"nav">, NavbarProps>(
	({ className, ...props }, forwardedRef) => {
		const innerRef = useRef(null);
		useImperativeHandle(forwardedRef, () => innerRef?.current!, [innerRef]);

		useAnimateOnScroll(innerRef);

		return (
			<nav
				ref={innerRef}
				className={cn(
					"fixed inset-x-0 bottom-0 z-[9999] h-0 max-h-16 overflow-hidden bg-background transition-[height] duration-200 ease-out",
					"lg:bottom-auto lg:top-0",
					className,
				)}
				{...props}
			>
				<div className="flex size-full items-center justify-between bg-navbar px-5 py-0">
					<LogoFull />
					<div className="hidden gap-6 lg:flex">
						<ButtonLink variant="link" href={SERVICES}>
							Prestations
						</ButtonLink>
						<ButtonLink
							variant="link"
							href={PORTFOLIO}
							external
							target="_blank"
						>
							Portfolio
						</ButtonLink>
					</div>
					<div className="hidden lg:flex">
						<ButtonLink variant="contained" href={ZCAL_FIRST}>
							Je prends rendez-vous
						</ButtonLink>
					</div>
					<div className="flex items-center gap-2 lg:hidden">
						<IconButtonLink size="small" href={ZCAL_FIRST}>
							<CalendarIcon />
						</IconButtonLink>
						<Sidebar>
							<IconButton size="small">
								<HamburgerMenuIcon />
							</IconButton>
						</Sidebar>
					</div>
				</div>
			</nav>
		);
	},
);

Navbar.displayName = "Navbar";

export default Navbar;
