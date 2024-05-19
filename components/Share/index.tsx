"use client";

import { LockClosedIcon, Share1Icon } from "@radix-ui/react-icons";
import DialogQRCode from "components/Dialog/QRCode";
import IconButton from "components/IconButton";
import ShareDropdown from "components/Share/Dropdown";
import ShareEmail from "components/Share/Email";
import ShareLocked from "components/Share/Locked";
import { useToast } from "components/Toast/Provider";
import getBaseUrl from "helpers/getBaseUrl";
import { useState } from "react";

// CONSTANTS
const LOCKED_KEY = "locked";

const iconButtonClassName = "relative";
const iconClassName = "absolute bottom-4 right-3 size-4 text-primary";

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
				<IconButton disabled={triggerDisabled} className={iconButtonClassName}>
					<Share1Icon />
					<LockClosedIcon className={iconClassName} />
				</IconButton>
			</ShareLocked>
		);
	}

	return (
		<ShareDropdown
			trigger={
				<IconButton className={iconButtonClassName}>
					<Share1Icon />
					{locked && <LockClosedIcon className={iconClassName} />}
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
