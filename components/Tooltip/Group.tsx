import RadixTooltipGroup from "components/Tooltip/Radix/Group";
import type { ReactNode } from "react";

interface TooltipGroupProps {
  children: ReactNode;
}
const TooltipGroup = ({ children }: TooltipGroupProps) => {
  return <RadixTooltipGroup>{children}</RadixTooltipGroup>;
};

export default TooltipGroup;
