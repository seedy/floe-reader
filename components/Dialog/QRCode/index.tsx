import {
	Root,
	Overlay,
	Content,
	Title,
	Description,
	Cancel,
} from "@radix-ui/react-alert-dialog";
import Button from "components/Button";
import Image from "components/Image";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import QRCode from "public/CBC_QR_CODE.png";
import styles from "components/Dialog/QRCode/QRCode.module.scss";

interface DialogQRCodeProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}
const DialogQRCode = ({ open, onOpenChange }: DialogQRCodeProps) => {
	return (
		<Root open={open} onOpenChange={onOpenChange}>
			<Overlay />
			<Content className={styles.content}>
				<Title asChild>
					<H2>QR Code</H2>
				</Title>
				<Description asChild>
					<H3>Flasher le QR Code</H3>
				</Description>
				<div className="flex grow flex-col items-center justify-center">
					<Image width={300} height={300} src={QRCode} alt="QR Code" />
				</div>
				<div className="flex flex-col items-center justify-center">
					<Cancel asChild>
						<Button>Fermer</Button>
					</Cancel>
				</div>
			</Content>
		</Root>
	);
};

export default DialogQRCode;
