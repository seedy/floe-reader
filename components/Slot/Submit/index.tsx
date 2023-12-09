import { Slot, SlotProps } from "@radix-ui/react-slot";
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
// @ts-ignore
import { useFormStatus } from "react-dom";

interface SlotSubmitProps {
	children: ReactNode;
}

interface SlotDisablableProps extends SlotProps {
	disabled?: boolean;
}

const SlotDisablable = Slot as ForwardRefExoticComponent<
	SlotDisablableProps & RefAttributes<HTMLElement>
>;

const SlotSubmit = ({ children }: SlotSubmitProps) => {
	const { pending } = useFormStatus();

	return (
		<SlotDisablable disabled={pending} aria-disabled={pending}>
			{children}
		</SlotDisablable>
	);
};

export default SlotSubmit;
