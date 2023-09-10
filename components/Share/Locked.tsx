import { EnterIcon } from "@radix-ui/react-icons";
import Flex from "components/Flex";
import IconButton from "components/IconButton";
import InputPassword from "components/Input/Password"
import { useToast } from "components/Toast/Provider";
import isTRPCClientError from "helpers/isTRPCClientError";
import trpc from "helpers/trpc";
import { SyntheticEvent } from "react";

interface LockedProps {
    onUnlocked: () => void
    onError: () => void
}
const Locked = ({ onUnlocked, onError }: LockedProps) => {
    const unlockMutation = trpc.unlock.useMutation();

    const onSubmit = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            password: { value: string };
        };
        const password = target?.password?.value;
        try {
            await unlockMutation.mutateAsync({ password });
            onUnlocked();
        } catch (error) {
            if (isTRPCClientError(error)) {
                return onError()
            }
            throw error
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Flex>
                <InputPassword label="Mot de passe admin" name="password" />
                <IconButton variant="small" type="submit"><EnterIcon /></IconButton>
            </Flex>
        </form>
    )
}

export default Locked;