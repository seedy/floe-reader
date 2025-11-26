"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {
  TOOLTIP_COLLISION_PADDING,
  TOOLTIP_DELAY,
  TOOLTIP_OFFSET,
} from "constants/tooltip";

function TooltipProvider({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={TOOLTIP_DELAY}
      {...props}
    />
  );
}

function TooltipRoot({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return (
    <TooltipPrimitive.Trigger asChild data-slot="tooltip-trigger" {...props} />
  );
}

function TooltipContent({
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={TOOLTIP_OFFSET}
        collisionPadding={TOOLTIP_COLLISION_PADDING}
        className={"bg-black/75 rounded-md text-white p-2 text-label z-9999"}
        {...props}
      >
        {children}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

interface RadixTooltipProps {
  children: React.ReactNode;
  className?: string;
  title: React.ReactNode | string | undefined | null;
}
const RadixTooltip = ({ children, className, title }: RadixTooltipProps) => (
  <TooltipRoot>
    <TooltipTrigger className={className}>{children}</TooltipTrigger>
    <TooltipContent>{title}</TooltipContent>
  </TooltipRoot>
);

export default RadixTooltip;
