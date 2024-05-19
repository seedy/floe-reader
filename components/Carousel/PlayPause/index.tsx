import { PauseIcon, PlayIcon } from "@radix-ui/react-icons";
import { cva } from "class-variance-authority";
import { MouseEvent, useRef, useState, useTransition } from "react";

interface PlayPauseProps {
	playing?: boolean;
	delay?: number;
	onClick?: (e: MouseEvent) => void;
}

const childVariants = cva(
	"rounded-round bg-blackAlpha7 p-6 text-secondaryBackground opacity-0 transition-opacity",
	{
		variants: {
			visible: {
				true: ["opacity-100"],
			},
		},
	},
);

const PlayPause = ({ playing, onClick, delay = 1000 }: PlayPauseProps) => {
	const [_isPending, startTransition] = useTransition();
	const [visible, setVisible] = useState(false);

	const childVariantClassName = childVariants({ visible });

	const timeoutRef = useRef<NodeJS.Timeout>();

	const onTogglePlayPause = (e: MouseEvent) => {
		if (!onClick) {
			return;
		}
		onClick(e);
		startTransition(() => {
			setVisible(true);
		});
		if (timeoutRef.current !== undefined) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = undefined;
		}
		timeoutRef.current = setTimeout(() => {
			startTransition(() => {
				setVisible(false);
			});
		}, delay);
	};

	return (
		<button
			className="absolute inset-0 z-1 m-0 inline-flex items-center justify-center border-none bg-none p-0 text-secondaryBackground focus-visible:bg-blackAlpha7 focus-visible:outline-none"
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
	);
};

export default PlayPause;
