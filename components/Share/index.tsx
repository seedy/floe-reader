import { CopyIcon, EnvelopeClosedIcon, LockClosedIcon, MixIcon, Share1Icon } from "@radix-ui/react-icons"
import IconButton from "components/IconButton"
import { Root, Trigger, Content, Label, Item, Group } from "@radix-ui/react-dropdown-menu"
import styles from "components/Share/Share.module.scss"
import Button from "components/Button"
import { useState } from "react"
import getBaseUrl from "helpers/getBaseUrl"
import H2 from "components/Typography/H2"
import DialogQRCode from "components/Dialog/QRCode"
import Flex from "components/Flex"
import Locked from "components/Share/Locked"
import { useToast } from "components/Toast/Provider"

// CONSTANTS
const LOCKED_KEY = "locked";

// HELPERS
const getLocked = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem(LOCKED_KEY);
    }
}
const unlock = () => localStorage.setItem(LOCKED_KEY, "true");

// COMPONENTS
const Share = () => {
    const addToast = useToast();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [locked, setLocked] = useState(!getLocked())
    const [pwErrorCount, setPwErrorCount] = useState(0);
    const [qrCodeOpen, setqrCodeOpen] = useState(false);

    const onUnlocked = () => {
        unlock();
        setLocked(!getLocked());
    }

    const onPwError = () => {
        setPwErrorCount(prev => {
            if (prev === 2) {
                addToast({ variant: 'error', title: "Mot de passe incorrect", children: "Verrouillage." });
                setDropdownOpen(false);
            }
            addToast({ variant: 'error', title: "Mot de passe incorrect", children: "Êtes-vous admin ?" });
            return prev + 1
        });
    }
    const triggerDisabled = pwErrorCount === 3

    const onQrCodeOpen = (e: Event) => {
        e.preventDefault();
        setqrCodeOpen(true);
    }

    const onShareMail = () => {

    }

    const onCopyLink = async () => {
        await navigator.clipboard.writeText(getBaseUrl())
    }

    return (
        <Root open={dropdownOpen} onOpenChange={setDropdownOpen}>
            <Trigger disabled={triggerDisabled} asChild>
                <IconButton className={styles.buttonLocked}>
                    <Share1Icon />
                    {locked && (
                        <LockClosedIcon className={styles.lock} />
                    )}
                </IconButton>
            </Trigger>
            <Content className={styles.content} collisionPadding={20}>
                <Label asChild>
                    <H2 className={styles.label}>{locked ? "Seuls les admins sont autorisés" : "Partager mon site vitrine"}</H2>
                </Label>
                {locked ? (
                    <Locked onUnlocked={onUnlocked} onError={onPwError} />
                ) : (
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
                )}
            </Content>
            <DialogQRCode open={qrCodeOpen} onOpenChange={setqrCodeOpen} />
        </Root>
    )
}

export default Share;