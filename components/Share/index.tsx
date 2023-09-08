import { CopyIcon, EnvelopeClosedIcon, MixIcon, Share1Icon } from "@radix-ui/react-icons"
import IconButton from "components/IconButton"
import { Root, Trigger, Portal, Content, Label, Item, Group } from "@radix-ui/react-dropdown-menu"
import styles from "components/Share/Share.module.scss"
import Button from "components/Button"
import { useState } from "react"
import getBaseUrl from "helpers/getBaseUrl"
import H2 from "components/Typography/H2"
import DialogQRCode from "components/Dialog/QRCode"
import Flex from "components/Flex"

const Share = () => {
    const [qrCodeOpen, setqrCodeOpen] = useState(false);

    const onQrCodeOpen = (e: Event) => {
        e.preventDefault();
        setqrCodeOpen(true);
    }

    const onShareMail = () => {

    }

    const onCopyLink = async () => {
        await navigator.clipboard.writeText(getBaseUrl() || "toto")
    }

    return (
        <Root>
            <Trigger asChild>
                <IconButton>
                    <Share1Icon />
                </IconButton>
            </Trigger>
            <Content className={styles.content} collisionPadding={20}>
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
            <DialogQRCode open={qrCodeOpen} onOpenChange={setqrCodeOpen} />
        </Root>
    )
}

export default Share;