import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";

interface SlotSubmitProps {
    children: ReactNode
}
const SlotSubmit = ({ children }: SlotSubmitProps) => {
    const { pending } = useFormStatus();

    return (
        <Slot aria-disabled={pending}>
            {children}
        </Slot>
    )
}

export default SlotSubmit