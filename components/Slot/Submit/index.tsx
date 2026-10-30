"use client";
import { createSlot, type SlotProps } from "@radix-ui/react-slot";
import type {
  ReactNode,
} from "react";
import { useFormStatus } from "react-dom";

interface SlotSubmitProps {
  children: ReactNode;
}

interface SlotDisablableProps extends SlotProps {
  disabled?: boolean;
}

const SlotDisablable = createSlot<HTMLButtonElement, SlotDisablableProps>("Disablable.Slot");

const SlotSubmit = ({ children }: SlotSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <SlotDisablable disabled={pending} aria-disabled={pending}>
      {children}
    </SlotDisablable>
  );
};

export default SlotSubmit;
