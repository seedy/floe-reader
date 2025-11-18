import {
	Content,
	Group,
	Item,
	Label,
	Root,
	Trigger,
} from "@radix-ui/react-dropdown-menu";
import { CopyIcon, EnvelopeClosedIcon, MixIcon } from "@radix-ui/react-icons";
import Button from "components/Button";
import H2 from "components/Typography/H2";
import { ReactNode } from "react";

const itemClassName = "gap-4";

interface ShareDropdownProps {
	open: boolean;
	onOpenChange: (value: boolean) => void;
	onQrCodeOpen: (e: Event) => void;
	onShareMail: (e: Event) => void;
	onCopyLink: () => void;
	trigger: ReactNode;
	children: ReactNode;
}
const ShareDropdown = ({
	open,
	onOpenChange,
	onQrCodeOpen,
	onShareMail,
	onCopyLink,
	trigger,
	children,
}: ShareDropdownProps) => (
	<Root open={open} onOpenChange={onOpenChange}>
		<Trigger asChild>{trigger}</Trigger>
		<Content
			className="m-0 flex flex-col items-start gap-8 rounded-mdborder-[0.125rem] border-solid border-secondary-background bg-background p-4"
			collisionPadding={{ top: 20, right: 20 }}
		>
			<Label asChild>
				<H2 color="secondary">Partager mon site vitrine</H2>
			</Label>
			<Group asChild>
				<div className="flex flex-col items-start">
					<Item asChild onSelect={onQrCodeOpen}>
						<Button className={itemClassName} type="button" variant="link">
							<MixIcon />
							QR code
						</Button>
					</Item>
					<Item asChild onSelect={onShareMail}>
						<Button className={itemClassName} type="button" variant="link">
							<EnvelopeClosedIcon />
							Mail automatique
						</Button>
					</Item>
					<Item asChild onSelect={onCopyLink}>
						<Button className={itemClassName} type="button" variant="link">
							<CopyIcon />
							Copier le lien
						</Button>
					</Item>
				</div>
			</Group>
		</Content>
		{children}
	</Root>
);

export default ShareDropdown;
