"use client";
import { PauseIcon, PlayIcon } from "@radix-ui/react-icons";
import { useBannerMagnifierPlayPauseContext } from "components/Banner/Magnifier/PlayPause/Context";
import IconButton from "components/IconButton";
import { useCallback } from "react";

const BannerMagnifierPlayPauseIconButton = () => {
  const { playing, setPlaying } = useBannerMagnifierPlayPauseContext();

  const onTogglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, [setPlaying]);

  return (
    <IconButton
      tooltip={playing ? "Mettre en pause" : "Reprendre"}
      size="small"
      onClick={onTogglePlaying}
    >
      {playing ? (
        <PlayIcon width={40} height={40} />
      ) : (
        <PauseIcon width={40} height={40} />
      )}
    </IconButton>
  );
};

export default BannerMagnifierPlayPauseIconButton;
