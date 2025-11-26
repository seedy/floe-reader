"use client";

import { RocketIcon } from "@radix-ui/react-icons";
import DialogAnnouncement from "components/Dialog/Announcement";
import IconButtonFloating from "components/IconButton/Floating";
import { ReactNode, useRef } from "react";

interface IconButtonFloatingDivProps {
  children: ReactNode;
}
const IconButtonFloatingDiv = ({ children }: IconButtonFloatingDivProps) => {
  const container = useRef<HTMLDivElement>(null);

  return (
    <>
      <DialogAnnouncement>
        <IconButtonFloating
          tooltip="Voir l'annonce"
          tooltipVariant="radix"
          className="z-1"
          container={container}
        >
          <RocketIcon />
        </IconButtonFloating>
      </DialogAnnouncement>
      <div ref={container}>{children}</div>
    </>
  );
};

export default IconButtonFloatingDiv;
