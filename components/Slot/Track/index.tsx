"use client";
import { Slot } from "@radix-ui/react-slot";
import { ComponentProps, ReactNode } from "react";

interface SlotTrackProps extends ComponentProps<typeof Slot> {
	children: ReactNode;
	name: string;
}

const SlotTrack = ({ children, name, ref: forwardedRef }: SlotTrackProps) => {
	const onClick = () => {
		if (typeof window !== "undefined") {
			umami.track(name);
		}
	};

	return (
		<Slot ref={forwardedRef} onClick={onClick}>
			{children}
		</Slot>
	);
};

export default SlotTrack;
