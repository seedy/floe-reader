import {
	Cancel,
	Content,
	Overlay,
	Portal,
	Root,
	Title,
	Trigger,
} from "@radix-ui/react-alert-dialog";
import { CalendarIcon, Cross2Icon } from "@radix-ui/react-icons";
import ButtonLink from "components/Button/Link";
import IconButton from "components/IconButton";
import IconButtonLink from "components/IconButton/Link";
import Logo from "components/Logo";
import Share from "components/Share";
import Socials from "components/Socials";
import LogoType from "components/Typography/LogoType";
import { PORTFOLIO, SERVICES, ZCAL_FIRST } from "constants/links";
import { env } from "env.mjs";
import cbcLogo from "public/CBC_LOGO_48.svg";
import { ReactNode } from "react";

interface SidebarProps {
	children: ReactNode;
}
const Sidebar = ({ children }: SidebarProps) => {
	return (
		<Root>
			<Trigger asChild>{children}</Trigger>
			<Portal>
				<Overlay className="fixed inset-0 z-[10000] bg-background" />
				<Content className="fixed inset-0 z-[10000] flex shrink-0 flex-col bg-navbar">
					<div className="mb-auto flex w-full items-center justify-end px-5">
						{env.NEXT_PUBLIC_DISPLAY_SHARE === true && <Share />}
					</div>
					<div className="flex flex-col items-start gap-4 px-5">
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
						<div className="flex w-full justify-center py-5">
							<Socials />
						</div>
					</div>
					<div className="flex max-h-16 grow items-center justify-between px-5">
						<div className="flex shrink-0 items-center gap-2">
							<Logo src={cbcLogo} alt="" />
							<Title asChild>
								<LogoType>Floé Gaubert</LogoType>
							</Title>
						</div>
						<div className="flex items-center gap-2">
							<IconButtonLink size="small" href={ZCAL_FIRST}>
								<CalendarIcon />
							</IconButtonLink>
							<Cancel asChild>
								<IconButton size="small">
									<Cross2Icon />
								</IconButton>
							</Cancel>
						</div>
					</div>
				</Content>
			</Portal>
		</Root>
	);
};

export default Sidebar;
