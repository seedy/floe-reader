import {
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
import Image from "components/Image";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
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
						<div className="flex flex-col items-center justify-center">
							<Cancel asChild>
								<Button>Fermer</Button>
							</Cancel>
						</div>
					</div>
				</Content>
			</Portal>
		</Root>
	);
};

export default DialogAnnouncement;
