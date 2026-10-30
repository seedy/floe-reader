import RadixTooltip from "components/Tooltip/Radix";
import type { ReactNode } from "react";

interface TooltipProps {
  title: ReactNode | string | undefined | null;
  children: ReactNode;
  className?: string;
}
const Tooltip = ({ title, children, className }: TooltipProps) => {
  return (
    <RadixTooltip className={className} title={title}>
      {children}
    </RadixTooltip>
  );
};

export default Tooltip;
