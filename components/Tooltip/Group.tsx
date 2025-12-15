import type { TooltipVariant } from "components/Tooltip";
import FloatingTooltipGroup from "components/Tooltip/Floating/Group";
import RadixTooltipGroup from "components/Tooltip/Radix/Group";
import type { ReactNode } from "react";

interface TooltipGroupProps {
  variant?: TooltipVariant;
  children: ReactNode;
}
const TooltipGroup = ({ variant, children }: TooltipGroupProps) => {
  if (variant === "radix") {
    return <RadixTooltipGroup>{children}</RadixTooltipGroup>;
  }
  return <FloatingTooltipGroup>{children}</FloatingTooltipGroup>;
};

export default TooltipGroup;
