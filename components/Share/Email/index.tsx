"use client";

import { Description, Overlay, Root } from "@radix-ui/react-dialog";
import { EnterIcon } from "@radix-ui/react-icons";
import IconButton from "components/IconButton";
import Input from "components/Input";
import {
	DialogClose,
	DialogContent,
	DialogTitle,
} from "components/Share/Dialog";
import SlotSubmit from "components/Slot/Submit";
import H3 from "components/Typography/H3";
import { useEffect, useRef } from "react";
// @ts-ignore
import { useFormState } from "react-dom";
import { share } from "server/actions";

interface ShareEmailProps {
	open: boolean;
	onOpenChange: (value: boolean) => void;
	onSent: () => void;
	onError: () => void;
}
const ShareEmail = ({
	open,
	onOpenChange,
	onSent,
	onError,
}: ShareEmailProps) => {
	const [state, formAction] = useFormState(share, undefined);
	const onSentRef = useRef(onSent);
	const onErrorRef = useRef(onError);

	useEffect(() => {
		if (state !== undefined) {
			return state?.success ? onSentRef.current() : onErrorRef.current();
		}
	}, [state]);

	return (
		<Root open={open} onOpenChange={onOpenChange}>
			<Overlay />
			<DialogContent>
				<DialogTitle>Partager la carte de visite</DialogTitle>
				<Description asChild>
					<H3 className="text-body">
						Veuillez indiquer le mail du destinataire
					</H3>
				</Description>
				<form action={formAction}>
					<div className="flex flex-col items-center gap-4">
						<Input label="Mail du destinataire" name="email" />
						<Input label="Informations supplémentaires" name="extra" />
						<SlotSubmit>
							<IconButton size="small" type="submit">
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

export default ShareEmail;
