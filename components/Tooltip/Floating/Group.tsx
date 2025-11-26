"use client";
import { FloatingDelayGroup } from "@floating-ui/react";
import { TOOLTIP_DELAY } from "constants/tooltip";
import type { ComponentProps } from "react";

interface TooltipGroupProps
  extends Omit<ComponentProps<typeof FloatingDelayGroup>, "delay">,
    Partial<Pick<ComponentProps<typeof FloatingDelayGroup>, "delay">> {}
const TooltipGroup = ({
  delay = TOOLTIP_DELAY,
  children,
  ...props
}: TooltipGroupProps) => {
  return (
    <FloatingDelayGroup delay={delay} {...props}>
      {children}
    </FloatingDelayGroup>
  );
};

export default TooltipGroup;
