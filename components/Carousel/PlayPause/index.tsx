"use client";
import { PauseIcon, PlayIcon } from "@radix-ui/react-icons";
import { playPauseIconVariants } from "components/Carousel/PlayPause/variants";
import SlotTrack from "components/Slot/Track";
import {
  type MouseEvent,
  startTransition,
  useEffect,
  useRef,
  useState,
} from "react";

interface PlayPauseProps {
  playing?: boolean;
  onTogglePlaying?: (
    e: MouseEvent<HTMLButtonElement>,
    nextPlaying: boolean,
  ) => void;
  delay?: number;
}

const PlayPause = ({
  playing,
  onTogglePlaying,
  delay = 1000,
}: PlayPauseProps) => {
  const [visible, setVisible] = useState(false);

  const playPauseIconVariantsClassName = playPauseIconVariants({ visible });

  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const onTogglePlayPause = (e: MouseEvent<HTMLButtonElement>) => {
    onTogglePlaying?.(e, !playing);
  };

  const onFocus = () => {
    setVisible(true);
  };

  const onBlur = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (playing === undefined) return;
    startTransition(() => {
      setVisible(true);
    });
    timeoutRef.current = setTimeout(() => {
      startTransition(() => {
        setVisible(false);
      });
    }, delay);
    return () => {
      if (timeoutRef.current === null) return;
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    };
  }, [delay, playing]);

  return (
    <SlotTrack
      name={`click play pause button from ${playing ? "playing" : "pause"}`}
    >
      <button
        type="button"
        aria-label={playing ? "Mettre en pause" : "Reprendre"}
        className="absolute inset-0 z-1 m-0 inline-flex items-center justify-center border-none bg-none p-0 text-secondary-background focus-visible:outline-hidden"
        onClick={onTogglePlayPause}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <div className={playPauseIconVariantsClassName}>
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
