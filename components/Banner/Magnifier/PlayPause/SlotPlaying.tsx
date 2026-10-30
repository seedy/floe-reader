"use client";
import { type SlotProps, createSlot } from "@radix-ui/react-slot";
import { useBannerMagnifierPlayPauseContext } from "components/Banner/Magnifier/PlayPause/Context";
import type {
  ReactNode,
} from "react";

interface PlayPauseSlotPlayingProps {
  children: ReactNode;
}

interface SlotPlayingProps extends SlotProps {
  playing?: boolean;
}

const SlotPlaying = createSlot<HTMLDivElement, SlotPlayingProps>("Playing.Slot");

const PlayPauseSlotPlaying = ({ children }: PlayPauseSlotPlayingProps) => {
  const { playing } = useBannerMagnifierPlayPauseContext();

  return <SlotPlaying playing={playing}>{children}</SlotPlaying>;
};

export default PlayPauseSlotPlaying;
