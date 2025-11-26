import FloatingTooltip from "components/Tooltip/Floating";
import RadixTooltip from "components/Tooltip/Radix";
import { ReactNode } from "react";

export type TooltipVariant = "radix" | "floating";

interface TooltipProps {
  variant?: TooltipVariant;
  title: ReactNode | string | undefined | null;
  children: ReactNode;
  className?: string;
}
const Tooltip = ({ variant, title, children, className }: TooltipProps) => {
  if (variant === "radix") {
    return (
      <RadixTooltip className={className} title={title}>
        {children}
      </RadixTooltip>
    );
  }
  return (
    <FloatingTooltip className={className} title={title}>
      {children}
    </FloatingTooltip>
  );
};

export default Tooltip;
