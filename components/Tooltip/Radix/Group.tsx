import { Provider } from "@radix-ui/react-tooltip";
import { TOOLTIP_DELAY } from "constants/tooltip";
import { ReactNode } from "react";

interface TooltipGroupProps {
  delay?: number;
  children: ReactNode;
}
const TooltipGroup = ({
  delay = TOOLTIP_DELAY,
  children,
}: TooltipGroupProps) => <Provider delayDuration={delay}>{children}</Provider>;

export default TooltipGroup;
