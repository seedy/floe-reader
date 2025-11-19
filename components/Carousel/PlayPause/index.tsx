"use client";
import { PauseIcon, PlayIcon } from "@radix-ui/react-icons";
import { cva } from "class-variance-authority";
import SlotTrack from "components/Slot/Track";
import { MouseEvent, useEffect, useRef, useState, useTransition } from "react";

interface PlayPauseProps {
	playing?: boolean;
	onTogglePlaying?: (
		e: MouseEvent<HTMLButtonElement>,
		nextPlaying: boolean,
	) => void;
	delay?: number;
}

const childVariants = cva(
	"rounded-round bg-black/70 p-6 text-secondary-background opacity-0 transition",
	{
		variants: {
			visible: {
				true: ["opacity-100 scale-150"],
			},
		},
	},
);

const PlayPause = ({
	playing,
	onTogglePlaying,
	delay = 1000,
}: PlayPauseProps) => {
	const [_isPending, startTransition] = useTransition();
	const [visible, setVisible] = useState(false);

	const childVariantClassName = childVariants({ visible });

	const timeoutRef = useRef<NodeJS.Timeout>(null);

	const onTogglePlayPause = (e: MouseEvent<HTMLButtonElement>) => {
		onTogglePlaying?.(e, !playing);
	};

	useEffect(() => {
		startTransition(() => {
			setVisible(true);
		});
		if (timeoutRef.current !== null) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		timeoutRef.current = setTimeout(() => {
			startTransition(() => {
				setVisible(false);
			});
		}, delay);
	}, [delay, playing]);

	return (
		<SlotTrack
			name={`click play pause button from ${playing ? "playing" : "pause"}`}
		>
			<button
				aria-label={playing ? "Mettre en pause" : "Reprendre"}
				className="absolute inset-0 z-1 m-0 inline-flex items-center justify-center border-none bg-none p-0 text-secondary-background focus-visible:bg-black/7 focus-visible:outline-hidden"
				onClick={onTogglePlayPause}
			>
				<div className={childVariantClassName}>
					{playing ? (
						<PlayIcon width={40} height={40} />
					) : (
						<PauseIcon width={40} height={40} />
					)}
				</div>
			</button>
		</SlotTrack>
	);
};

export default PlayPause;
