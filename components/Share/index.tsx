"use client";

import { LockClosedIcon, Share1Icon } from "@radix-ui/react-icons";
import IconButton from "components/IconButton";
import styles from "components/Share/Share.module.css";
import { useState } from "react";
import getBaseUrl from "helpers/getBaseUrl";
import DialogQRCode from "components/Dialog/QRCode";
import { useToast } from "components/Toast/Provider";
import ShareDropdown from "components/Share/Dropdown";
import ShareLocked from "components/Share/Locked";
import ShareEmail from "components/Share/Email";

// CONSTANTS
const LOCKED_KEY = "locked";

// HELPERS
const getLocked = () => {
	if (typeof window !== "undefined") {
		return localStorage.getItem(LOCKED_KEY);
	}
};
const unlock = () => localStorage.setItem(LOCKED_KEY, "true");

// COMPONENTS
const Share = () => {
	const addToast = useToast();
	const [dialogOpen, setDialogOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [locked, setLocked] = useState(!getLocked());
	const [emailOpen, setEmailOpen] = useState(false);
	const [pwErrorCount, setPwErrorCount] = useState(0);
	const [qrCodeOpen, setqrCodeOpen] = useState(false);

	const onUnlocked = () => {
		unlock();
		setLocked(!getLocked());
		addToast({
			variant: "success",
			title: "Déverrouillé",
			children: "Bienvenue Floé",
		});
	};

	const onPwError = () => {
		if (pwErrorCount >= 2) {
			addToast({
				variant: "error",
				title: "Mot de passe incorrect",
				children: "Verrouillage.",
			});
		} else {
			addToast({
				variant: "error",
				title: "Mot de passe incorrect",
				children: "Êtes-vous admin ?",
			});
		}
		setPwErrorCount((prev) => {
			if (prev === 2) {
				setDropdownOpen(false);
				setDialogOpen(false);
			}
			return prev + 1;
		});
	};
	const triggerDisabled = pwErrorCount === 3;

	const onQrCodeOpen = (e: Event) => {
		e.preventDefault();
		setqrCodeOpen(true);
	};

	const onShareMail = (e: Event) => {
		e.preventDefault();
		setEmailOpen(true);
	};

	const onSent = () => {
		addToast({ variant: "success", title: "Email envoyé", children: null });
		setEmailOpen(false);
	};

	const onEmailError = () => {
		addToast({
			variant: "error",
			title: "Email non envoyé",
			children: "Une erreur est survenue",
		});
	};

	const onCopyLink = async () => {
		await navigator.clipboard.writeText(getBaseUrl());
	};

	if (locked) {
		return (
			<ShareLocked
				open={dialogOpen}
				onOpenChange={setDialogOpen}
				onUnlocked={onUnlocked}
				onError={onPwError}
			>
				<IconButton disabled={triggerDisabled} className={styles.buttonLocked}>
					<Share1Icon />
					<LockClosedIcon className={styles.lock} />
				</IconButton>
			</ShareLocked>
		);
	}

	return (
		<ShareDropdown
			trigger={
				<IconButton className={styles.buttonLocked}>
					<Share1Icon />
					{locked && <LockClosedIcon className={styles.lock} />}
				</IconButton>
			}
			open={dropdownOpen}
			onOpenChange={setDropdownOpen}
			onQrCodeOpen={onQrCodeOpen}
			onShareMail={onShareMail}
			onCopyLink={onCopyLink}
		>
			<DialogQRCode open={qrCodeOpen} onOpenChange={setqrCodeOpen} />
			<ShareEmail
				open={emailOpen}
				onOpenChange={setEmailOpen}
				onSent={onSent}
				onError={onEmailError}
			/>
		</ShareDropdown>
	);
};

export default Share;
