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
      children: "Bienvenue Floé",
      title: "Déverrouillé",
      variant: "success",
    });
  };

  const onPwError = () => {
    if (pwErrorCount >= 2) {
      addToast({
        children: "Verrouillage.",
        title: "Mot de passe incorrect",
        variant: "error",
      });
    } else {
      addToast({
        children: "Êtes-vous admin ?",
        title: "Mot de passe incorrect",
        variant: "error",
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
    addToast({ children: null, title: "Email envoyé", variant: "success" });
    setEmailOpen(false);
  };

  const onEmailError = () => {
    addToast({
      children: "Une erreur est survenue",
      title: "Email non envoyé",
      variant: "error",
    });
  };

  const onCopyLink = async () => {
    await navigator.clipboard.writeText(getBaseUrl());
    addToast({ children: null, title: "Lien copié !", variant: "success" });
  };

  if (locked) {
    return (
      <ShareLocked
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onUnlocked={onUnlocked}
        onError={onPwError}
      >
        <IconButton
          size="large"
          tooltip="Déverrouiller"
          tooltipVariant="radix"
          disabled={triggerDisabled}
          className="relative"
        >
          <Share1Icon />
          <LockClosedIcon className="absolute bottom-0 right-0 size-6! text-primary z-1" />
        </IconButton>
      </ShareLocked>
    );
  }

  return (
    <ShareDropdown
      trigger={
        <IconButton tooltip="Partager" tooltipVariant="radix" size="large">
          <Share1Icon />
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
