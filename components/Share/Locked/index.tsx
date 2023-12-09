"use client";

import {
	Root,
	Trigger,
	Overlay,
	Content,
	Title,
	Close,
	Description,
} from "@radix-ui/react-dialog";
import { Cross2Icon, EnterIcon } from "@radix-ui/react-icons";
import { unlock } from "server/actions";
import Flex from "components/Flex";
import IconButton from "components/IconButton";
import InputPassword from "components/Input/Password";
import SlotSubmit from "components/Slot/Submit";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import styles from "components/Share/Locked/Locked.module.css";
import { ReactNode, useEffect, useRef } from "react";
// @ts-ignore
import { useFormState } from "react-dom";

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
			<Content className={styles.content}>
				<Title asChild>
					<H2 className={styles.label}>Seuls les admins sont autorisés</H2>
				</Title>
				<Description asChild>
					<H3 className={styles.description}>Veuillez vous identifier</H3>
				</Description>
				<form action={formAction}>
					<Flex className={styles.formRow}>
						<InputPassword label="Mot de passe admin" name="password" />
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

export default ShareLocked;
