"use client";
import {
	Action,
	Content,
	Description,
	Overlay,
	Portal,
	Root,
	Title,
	Trigger,
} from "@radix-ui/react-alert-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import ButtonLink from "components/Button/Link";
import Share from "components/Share";
import SlotTrack from "components/Slot/Track";
import Socials from "components/Socials";
import { PORTFOLIO, SERVICES } from "constants/links";
import { env } from "env.mjs";
import cn from "helpers/cn";
import { ComponentProps, ReactNode } from "react";

interface SidebarProps {
	children: ReactNode;
	onOpenAutoFocus?: ComponentProps<typeof Content>["onOpenAutoFocus"];
}
const Sidebar = ({ children, onOpenAutoFocus }: SidebarProps) => {
	return (
		<Root>
			<Trigger asChild>{children}</Trigger>
			<Portal>
				<Overlay
					className={cn(
						"fixed inset-x-0 bottom-navbar top-0 z-navbar bg-background",
						"origin-bottom data-[state=closed]:animate-fold data-[state=open]:animate-unfold",
					)}
				/>
				<Content
					onOpenAutoFocus={onOpenAutoFocus}
					className={cn(
						"group fixed inset-x-0 bottom-navbar top-0 z-navbar flex shrink-0 origin-bottom flex-col bg-navbar",
						"data-[state=closed]:animate-fold data-[state=open]:animate-unfold",
					)}
				>
					<VisuallyHidden>
						<Title>Menu</Title>
						<Description>
							Menu principal du site, tu y trouveras tous les liens pour me
							suivre.
						</Description>
					</VisuallyHidden>
					<div className="mb-auto flex w-full items-center justify-end px-5">
						{env.NEXT_PUBLIC_DISPLAY_SHARE === true && <Share />}
					</div>
					<div
						className={cn(
							"flex flex-col items-start gap-4 px-5",
							"group-data-[state=closed]:animate-disappear group-data-[state=open]:animate-appear",
						)}
					>
						<Action>
							<SlotTrack name="click sidebar link prestations">
								<ButtonLink variant="link" href={SERVICES}>
									Prestations
								</ButtonLink>
							</SlotTrack>
						</Action>
						<SlotTrack name="click sidebar link portfolio">
							<ButtonLink
								variant="link"
								href={PORTFOLIO}
								external
								target="_blank"
							>
								Portfolio
							</ButtonLink>
						</SlotTrack>
						<div className="flex w-full justify-center py-5">
							<Socials />
						</div>
					</div>
				</Content>
			</Portal>
		</Root>
	);
};

export default Sidebar;
