"use client";
import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
} from "react";

interface BannerMagnifierPlayPauseContextValue {
  playing: boolean;
  setPlaying: Dispatch<SetStateAction<boolean>>;
}

export const BannerMagnifierPlayPauseContext =
  createContext<BannerMagnifierPlayPauseContextValue | null>(null);

export const useBannerMagnifierPlayPauseContext = () => {
  const context = useContext(BannerMagnifierPlayPauseContext);

  if (context === null) {
    throw new Error(
      "useBannerMagnifierPlayPauseContext must be used within BannerMagnifierPlayPauseProvider!",
    );
  }

  return context;
};
