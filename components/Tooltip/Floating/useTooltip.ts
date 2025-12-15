import {
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useDelayGroup,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import {
  TOOLTIP_COLLISION_PADDING,
  TOOLTIP_DELAY,
  TOOLTIP_OFFSET,
} from "constants/tooltip";
import { useMemo, useState } from "react";

export interface TooltipOptions {
  initialOpen?: boolean;
}

export const useTooltip = ({ initialOpen }: TooltipOptions) => {
  const [open, setOpen] = useState(initialOpen);

  const data = useFloating({
    middleware: [
      offset(TOOLTIP_OFFSET),
      flip({
        fallbackAxisSideDirection: "start",
        padding: TOOLTIP_COLLISION_PADDING,
      }),
      shift({ padding: TOOLTIP_COLLISION_PADDING }),
    ],
    onOpenChange: setOpen,
    open,
    whileElementsMounted: autoUpdate,
  });

  const context = data.context;
  const { delay: groupDelay } = useDelayGroup(context, {
    id: context.floatingId,
  });

  const hover = useHover(context, {
    delay: groupDelay ?? TOOLTIP_DELAY,
    enabled: true,
    handleClose: safePolygon(),
    move: false,
  });

  const focus = useFocus(context, {
    enabled: true,
  });

  const dismiss = useDismiss(context);

  const role = useRole(context, { role: "tooltip" });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return useMemo(
    () => ({ open, setOpen, ...interactions, ...data }),
    [open, interactions, data],
  );
};
