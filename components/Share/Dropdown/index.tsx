import { CopyIcon, EnvelopeClosedIcon, MixIcon } from "@radix-ui/react-icons";
import {
	Root,
	Trigger,
	Content,
	Label,
	Item,
	Group,
} from "@radix-ui/react-dropdown-menu";
import styles from "components/Share/Share.module.css";
import Button from "components/Button";
import { ReactNode } from "react";
import H2 from "components/Typography/H2";
import Flex from "components/Flex";

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
			className={styles.content}
			collisionPadding={{ top: 20, right: 20 }}
		>
			<Label asChild>
				<H2 className={styles.label}>Partager mon site vitrine</H2>
			</Label>
			<Group asChild>
				<Flex align="start" direction="column">
					<Item asChild onSelect={onQrCodeOpen}>
						<Button className={styles.item} type="button" variant="link">
							<MixIcon />
							QR code
						</Button>
					</Item>
					<Item asChild onSelect={onShareMail}>
						<Button className={styles.item} type="button" variant="link">
							<EnvelopeClosedIcon />
							Mail automatique
						</Button>
					</Item>
					<Item asChild onSelect={onCopyLink}>
						<Button className={styles.item} type="button" variant="link">
							<CopyIcon />
							Copier le lien
						</Button>
					</Item>
				</Flex>
			</Group>
		</Content>
		{children}
	</Root>
);

export default ShareDropdown;
