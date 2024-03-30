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
					"z-[9999] fixed bottom-0 left-0 right-0 max-h-16 h-[0%] overflow-hidden bg-background transition-[height] duration-200 ease-out",
					className,
				)}
				{...props}
			>
				<div className="flex size-full flex-col items-center justify-between bg-navbar px-5 py-0">
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
						<IconButtonLink variant="small" href={CALENDLY}>
							<CalendarIcon />
						</IconButtonLink>
						<IconButtonLink
							variant="small"
							href="#email"
							className="hidden lg:inline-flex"
						>
							<EnvelopeClosedIcon />
						</IconButtonLink>
						<Sidebar>
							<IconButton variant="small">
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
