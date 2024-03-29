import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";
import { useRef, useState, useTransition, MouseEvent } from "react";
import styles from "components/Carousel/PlayPause/PlayPause.module.css";
import classNames from "helpers/classNames";

interface PlayPauseProps {
	playing?: boolean;
	delay?: number;
	onClick?: (e: MouseEvent) => void;
}
const PlayPause = ({ playing, onClick, delay = 1000 }: PlayPauseProps) => {
	const [isPending, startTransition] = useTransition();
	const [visible, setVisible] = useState(false);
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
			className={
				visible ? classNames(styles.root, styles.visible) : styles.root
			}
			onClick={onTogglePlayPause}
		>
			{playing ? (
				<PlayIcon width={40} height={40} />
			) : (
				<PauseIcon width={40} height={40} />
			)}
		</button>
	);
};

export default PlayPause;
