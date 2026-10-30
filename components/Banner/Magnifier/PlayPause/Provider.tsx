"use client";
import { BannerMagnifierPlayPauseContext } from "components/Banner/Magnifier/PlayPause/Context";
import { type ContextType, type ReactNode, useMemo, useState } from "react";

interface BannerMagnifierPlayPauseProviderProps {
  children: ReactNode;
  defaultValue: boolean;
}
const BannerMagnifierPlayPauseProvider = ({
  children,
  defaultValue,
}: BannerMagnifierPlayPauseProviderProps) => {
  const [playing, setPlaying] = useState(defaultValue);

  const contextValue = useMemo(
    () =>
      ({ playing, setPlaying }) satisfies ContextType<
        typeof BannerMagnifierPlayPauseContext
      >,
    [playing],
  );
  return (
    <BannerMagnifierPlayPauseContext value={contextValue}>
      {children}
    </BannerMagnifierPlayPauseContext>
  );
};

export default BannerMagnifierPlayPauseProvider;
