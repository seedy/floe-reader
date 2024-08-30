"use client";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

interface SlotTrackProps {
	children: ReactNode;
	name: string;
}

const SlotTrack = ({ children, name }: SlotTrackProps) => {
	const onClick = () => {
		if (typeof window !== "undefined") {
			umami.track(name);
		}
	};

	return <Slot onClick={onClick}>{children}</Slot>;
};

export default SlotTrack;
