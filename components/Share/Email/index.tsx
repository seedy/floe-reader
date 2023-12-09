"use client";

import {
	Root,
	Overlay,
	Content,
	Title,
	Close,
	Description,
} from "@radix-ui/react-dialog";
import { Cross2Icon, EnterIcon } from "@radix-ui/react-icons";
import { share } from "server/actions";
import Flex from "components/Flex";
import IconButton from "components/IconButton";
import SlotSubmit from "components/Slot/Submit";
import Input from "components/Input";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import styles from "components/Share/Email/Email.module.css";
import { useEffect, useRef } from "react";
// @ts-ignore
import { useFormState } from "react-dom";

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
			<Content className={styles.content}>
				<Title asChild>
					<H2 className={styles.label}>Partager la carte de visite</H2>
				</Title>
				<Description asChild>
					<H3 className={styles.description}>
						Veuillez indiquer le mail du destinataire
					</H3>
				</Description>
				<form action={formAction}>
					<Flex className={styles.formRow}>
						<Input label="Mail du destinataire" name="email" />
						<SlotSubmit>
							<IconButton variant="small" type="submit">
								<EnterIcon />
							</IconButton>
						</SlotSubmit>
					</Flex>
				</form>
				<Close asChild aria-label="Fermer">
					<IconButton className={styles.close} variant="small" type="button">
						<Cross2Icon />
					</IconButton>
				</Close>
			</Content>
		</Root>
	);
};

export default ShareEmail;
