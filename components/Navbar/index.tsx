"use client";

import {
	CalendarIcon,
	EnvelopeClosedIcon,
	HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import ButtonLink from "components/Button/Link";
import IconButton from "components/IconButton";
import IconButtonLink from "components/IconButton/Link";
import Logo from "components/Logo";
import Sidebar from "components/Navbar/Sidebar";
import useAnimateOnScroll from "components/Navbar/useAnimateOnScroll";
import Handwritten from "components/Typography/Handwritten";
import { CALENDLY } from "constants/links";
import cn from "helpers/cn";
import cbcLogo from "public/CBC_LOGO_48.svg";
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
					<div className="flex items-center gap-2">
						<Logo src={cbcLogo} alt="CBenCorrec'" />
						<Handwritten>Floé Gaubert</Handwritten>
					</div>
					<div className={"hidden gap-6 lg:flex"}>
						<ButtonLink variant="link" href="#intro">
							Intro
						</ButtonLink>
						<ButtonLink variant="link" href="#presentation">
							Présentation
						</ButtonLink>
						<ButtonLink variant="link" href="#portfolio">
							Portfolio
						</ButtonLink>
					</div>
					<div className="flex items-center gap-5">
						<IconButtonLink size="small" href={CALENDLY}>
							<CalendarIcon />
						</IconButtonLink>
						<IconButtonLink
							size="small"
							href="#email"
							className="hidden lg:inline-flex"
						>
							<EnvelopeClosedIcon />
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
