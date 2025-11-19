import {
	Action,
	Cancel,
	Content,
	Description,
	Overlay,
	Portal,
	Root,
	Title,
	Trigger,
} from "@radix-ui/react-alert-dialog";
import Button from "components/Button";
import ButtonLink from "components/Button/Link";
import Image from "components/Image";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import { ZCAL_FIRST } from "constants/links";
import cn from "helpers/cn";
import announcementPro from "public/announcement-pro.webp";
import { ReactNode } from "react";

interface DialogAnnouncementProps {
	children: ReactNode;
}
const DialogAnnouncement = ({ children }: DialogAnnouncementProps) => {
	return (
		<Root>
			<Trigger asChild>{children}</Trigger>
			<Portal>
				<Overlay />
				<Content className="fixed h-svh w-svw z-10000 flex flex-col bg-background p-5">
					<Title asChild>
						<H2>Offre de lancement</H2>
					</Title>
					<Description asChild>
						<H3>Prix attractif</H3>
					</Description>
					<div className="flex grow flex-col gap-4">
						<div className="flex grow flex-col relative">
							<Image
								fill
								className="object-contain"
								src={announcementPro}
								alt="Offre de lancement"
							/>
						</div>
						<div
							className={cn(
								"flex items-center justify-between",
								"lg:justify-center lg:gap-16",
							)}
						>
							<Cancel asChild>
								<Button>Fermer</Button>
							</Cancel>
							<Action asChild>
								<ButtonLink
									variant="contained"
									color="secondary"
									href={ZCAL_FIRST}
								>
									J&apos;en profite
								</ButtonLink>
							</Action>
						</div>
					</div>
				</Content>
			</Portal>
		</Root>
	);
};

export default DialogAnnouncement;
