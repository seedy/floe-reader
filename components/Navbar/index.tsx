"use client";

import { CalendarIcon } from "@radix-ui/react-icons";
import ButtonLink from "components/Button/Link";
import IconButtonHamburgerMenu from "components/IconButton/HamburgerMenu";
import IconButtonLink from "components/IconButton/Link";
import LogoFull from "components/Logo/Full";
import Sidebar from "components/Navbar/Sidebar";
import useAnimateOnScroll from "components/Navbar/useAnimateOnScroll";
import SlotTrack from "components/Slot/Track";
import { PORTFOLIO, SERVICES, ZCAL_FIRST } from "constants/links";
import cn from "helpers/cn";
import Link from "next/link";
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
		const innerRef = useRef<ElementRef<"nav"> | null>(null);
		useImperativeHandle(forwardedRef, () => innerRef?.current!, [innerRef]);

		useAnimateOnScroll(innerRef);

		const onOpenAutoFocus = () => {
			if (innerRef.current) {
				innerRef.current.removeAttribute("aria-hidden");
				innerRef.current.removeAttribute("data-aria-hidden");
			}
		};

		return (
			<nav
				ref={innerRef}
				className={cn(
					"pointer-events-auto fixed z-navbar h-0 max-h-navbar overflow-hidden bg-background transition-[height] duration-200 ease-out",
					"inset-x-0 bottom-0 lg:bottom-auto lg:top-0",
					className,
				)}
				{...props}
			>
				<div className="flex size-full items-center justify-between bg-navbar px-5 py-0">
					<Link href="/" aria-label="Accueil">
						<LogoFull />
					</Link>
					<div className="hidden gap-6 lg:flex">
						<SlotTrack name="click navbar link prestations">
							<ButtonLink variant="link" href={SERVICES}>
								Prestations
							</ButtonLink>
						</SlotTrack>
						<SlotTrack name="click navbar link portfolio">
							<ButtonLink
								variant="link"
								href={PORTFOLIO}
								external
								target="_blank"
							>
								Portfolio
							</ButtonLink>
						</SlotTrack>
					</div>
					<div className="hidden lg:flex">
						<SlotTrack name="click navbar cta first">
							<ButtonLink variant="contained" href={ZCAL_FIRST}>
								Je prends rendez-vous
							</ButtonLink>
						</SlotTrack>
					</div>
					<div className="flex items-center gap-2 lg:hidden">
						<SlotTrack name="click navbar icon first">
							<IconButtonLink
								aria-label="Prendre rendez-vous"
								size="small"
								href={ZCAL_FIRST}
							>
								<CalendarIcon />
							</IconButtonLink>
						</SlotTrack>
						<Sidebar onOpenAutoFocus={onOpenAutoFocus}>
							<IconButtonHamburgerMenu aria-label="Menu" size="small" />
						</Sidebar>
					</div>
				</div>
			</nav>
		);
	},
);

Navbar.displayName = "Navbar";

export default Navbar;
