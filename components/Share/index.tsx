import { CopyIcon, EnvelopeClosedIcon, MixIcon, Share1Icon } from "@radix-ui/react-icons"
import IconButton from "components/IconButton"
import { Root, Trigger, Portal, Content, Label, Item, Group } from "@radix-ui/react-dropdown-menu"
import styles from "components/Share/Share.module.scss"
import Box from "components/Box"
import H2 from "components/Typography/H2"
import Flex from "components/Flex"
import Button from "components/Button"
import { SyntheticEvent, useState } from "react"
import trpc from "helpers/trpc";
import getBaseUrl from "helpers/getBaseUrl"

const Share = () => {
    const [QRCodeOpen, setQRCodeOpen] = useState(false);
    const shareMutation = trpc.share.useMutation();

    const onQRCodeOpen = () => {
        setQRCodeOpen(true);
    }

    const onShareMail = () => {

    }

    const onCopyLink = () => {
        navigator.clipboard.writeText(getBaseUrl())
    }

    return (
        <Root>
            <Trigger asChild>
                <IconButton>
                    <Share1Icon />
                </IconButton>
            </Trigger>
            <Portal>
                <Content>
                    <Label className={styles.label}>Partager mon site vitrine</Label>
                    <Group>
                        <Item asChild>
                            <Button variant="link" onClick={onQRCodeOpen}>
                                <MixIcon />
                                QR code
                            </Button>
                        </Item>
                        <Item asChild>
                            <Button variant="link" onClick={onShareMail}>
                                <EnvelopeClosedIcon />
                                Mail automatique
                            </Button>
                        </Item>
                        <Item asChild>
                            <Button variant="link" onClick={onCopyLink}>
                                <CopyIcon />
                                Copier le lien
                            </Button>
                        </Item>

                    </Group>
                </Content>
            </Portal>
        </Root>
    )
}

export default Share;