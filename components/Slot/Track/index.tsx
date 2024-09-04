"use client";
import { Slot } from "@radix-ui/react-slot";
import { ElementRef, ReactNode, forwardRef } from "react";

interface SlotTrackProps {
	children: ReactNode;
	name: string;
}

const SlotTrack = forwardRef<ElementRef<typeof Slot>, SlotTrackProps>(
	({ children, name }, forwardedRef) => {
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
	},
);

export default SlotTrack;
