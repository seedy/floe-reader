import { EnterIcon } from "@radix-ui/react-icons";
import { unlock } from "server/actions";
import Flex from "components/Flex";
import IconButton from "components/IconButton";
import InputPassword from "components/Input/Password"
import SlotSubmit from "components/Slot/Submit";

interface LockedProps {
    onUnlocked: () => void
    onError: () => void
}
const Locked = ({ onUnlocked, onError }: LockedProps) => {

    const formActionWithSideEffects = async (formData: FormData) => {
        try {
            unlock(formData);
            onUnlocked();
        } catch (error) {
            return onError()
        }
    }

    return (
        <form action={formActionWithSideEffects}>
            <Flex>
                <InputPassword label="Mot de passe admin" name="password" />
                <IconButton variant="small" type="submit"><EnterIcon /></IconButton>
            </Flex>
        </form>
    )
}

export default Locked;