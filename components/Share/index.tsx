"use client"

import { LockClosedIcon, Share1Icon } from "@radix-ui/react-icons"
import IconButton from "components/IconButton"
import styles from "components/Share/Share.module.css"
import { useEffect, useState } from "react"
import getBaseUrl from "helpers/getBaseUrl"
import DialogQRCode from "components/Dialog/QRCode"
import { useToast } from "components/Toast/Provider"
import ShareDropdown from "components/Share/Dropdown"
import ShareLocked from "components/Share/Locked"

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
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [locked, setLocked] = useState(!getLocked())
    const [pwErrorCount, setPwErrorCount] = useState(0);
    const [qrCodeOpen, setqrCodeOpen] = useState(false);

    const onUnlocked = () => {
        unlock();
        setLocked(!getLocked());
        addToast({ variant: 'success', title: "Déverrouillé", children: "Bienvenue Floé" })
    }

    const onPwError = () => {
        if (pwErrorCount >= 2) {
            addToast({ variant: 'error', title: "Mot de passe incorrect", children: "Verrouillage." });
        } else {
            addToast({ variant: 'error', title: "Mot de passe incorrect", children: "Êtes-vous admin ?" });
        }
        setPwErrorCount(prev => {
            if (prev === 2) {
                setDropdownOpen(false);
                setDialogOpen(false);
            }
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

    useEffect(() => {
        onUnlocked();
    }, [])

    if (locked) {
        return (
            <ShareLocked open={dialogOpen} onOpenChange={setDialogOpen} onUnlocked={onUnlocked} onError={onPwError}>
                <IconButton disabled={triggerDisabled} className={styles.buttonLocked}>
                    <Share1Icon />
                    <LockClosedIcon className={styles.lock} />
                </IconButton>
            </ShareLocked>
        )
    }

    return (
        <ShareDropdown trigger={<IconButton className={styles.buttonLocked}>
            <Share1Icon />
            {locked && (
                <LockClosedIcon className={styles.lock} />
            )}
        </IconButton>
        } open={dropdownOpen} onOpenChange={setDropdownOpen} onQrCodeOpen={onQrCodeOpen} onShareMail={onShareMail} onCopyLink={onCopyLink}>
            <DialogQRCode open={qrCodeOpen} onOpenChange={setqrCodeOpen} />

        </ShareDropdown>
    )
}

export default Share;