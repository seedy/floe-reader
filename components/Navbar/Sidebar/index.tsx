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
import Handwritten from "components/Typography/Handwritten";
import { CALENDLY } from "constants/links";
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
						<Share />
					</div>
					<div className="flex flex-col items-start px-5">
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
					<div className="flex max-h-16 grow items-center justify-between px-5">
						<div className="flex items-center gap-2">
							<Logo src={cbcLogo} alt="CBenCorrec'" />
							<Title asChild>
								<Handwritten>Floé Gaubert</Handwritten>
							</Title>
						</div>
						<div className="flex items-center gap-4">
							<IconButtonLink variant="small" href={CALENDLY}>
								<CalendarIcon />
							</IconButtonLink>
							<Cancel asChild>
								<IconButton variant="small">
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
