"use client";

import { Description, Overlay, Root, Trigger } from "@radix-ui/react-dialog";
import { EnterIcon } from "@radix-ui/react-icons";
import IconButton from "components/IconButton";
import InputPassword from "components/Input/Password";
import {
	DialogClose,
	DialogContent,
	DialogTitle,
} from "components/Share/Dialog";
import SlotSubmit from "components/Slot/Submit";
import H3 from "components/Typography/H3";
import { ReactNode, useEffect, useRef } from "react";
// @ts-ignore
import { useFormState } from "react-dom";
import { unlock } from "server/actions";

interface ShareLockedProps {
	open: boolean;
	onOpenChange: (value: boolean) => void;
	onUnlocked: () => void;
	onError: () => void;
	children: ReactNode;
}
const ShareLocked = ({
	open,
	onOpenChange,
	onUnlocked,
	onError,
	children,
}: ShareLockedProps) => {
	const [state, formAction] = useFormState(unlock, undefined);
	const onUnlockedRef = useRef(onUnlocked);
	const onErrorRef = useRef(onError);

	useEffect(() => {
		if (state !== undefined) {
			return state?.success ? onUnlockedRef.current() : onErrorRef.current();
		}
	}, [state]);

	return (
		<Root open={open} onOpenChange={onOpenChange}>
			<Trigger asChild>{children}</Trigger>
			<Overlay />
			<DialogContent>
				<DialogTitle>Seuls les admins sont autorisés</DialogTitle>
				<Description asChild>
					<H3 className="text-body">Veuillez vous identifier</H3>
				</Description>
				<form action={formAction}>
					<div className="flex gap-4">
						<InputPassword label="Mot de passe admin" name="password" />
						<SlotSubmit>
							<IconButton variant="small" type="submit">
								<EnterIcon />
							</IconButton>
						</SlotSubmit>
					</div>
				</form>
				<DialogClose />
			</DialogContent>
		</Root>
	);
};

export default ShareLocked;
