"use client";
import {
  FloatingPortal,
  useDelayGroup,
  useMergeRefs,
  useTransitionStyles,
} from "@floating-ui/react";
import { Slot } from "@radix-ui/react-slot";
import {
  TooltipOptions,
  useTooltip,
} from "components/Tooltip/Floating/useTooltip";
import { isValidElementWithRef } from "helpers/isValidElementWithRef";
import {
  Children,
  ComponentProps,
  createContext,
  HTMLProps,
  ReactNode,
  useContext,
  useMemo,
} from "react";

// CONSTANTS
const INSTANT_DURATION = 0;
const DEFAULT_DURATION = 150;

// CONTEXT
type ContextType = ReturnType<typeof useTooltip> | null;

const TooltipContext = createContext<ContextType>(null);

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);

  if (context === null) {
    throw new Error("useTooltipContext must be used within TooltipRoot!");
  }
  return context;
};

interface TooltipRootProps extends TooltipOptions {
  children: ReactNode;
}
const TooltipRoot = ({ children, ...options }: TooltipRootProps) => {
  const tooltip = useTooltip(options);

  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  );
};

interface TooltipTriggerProps extends HTMLProps<HTMLElement> {
  children: ReactNode;
}
const TooltipTrigger = ({ children, ref, ...props }: TooltipTriggerProps) => {
  const { getReferenceProps, refs, open } = useTooltipContext();
  const child = Children.only(children);
  const childrenValid = isValidElementWithRef(child);
  const childrenRef = childrenValid ? child.props.ref : undefined;

  const mergedRef = useMergeRefs([refs.setReference, ref, childrenRef]);

  if (!childrenValid) throw new Error("Invalid children for TooltipTrigger");

  const referenceProps = useMemo(
    () => ({
      ...getReferenceProps({
        ref: mergedRef,
        ...props,
        ...child.props,
      }),
      "data-tooltip": open ? "open" : "closed",
    }),
    [getReferenceProps, mergedRef, props, child.props, open]
  );

  return <Slot {...referenceProps}>{child}</Slot>;
};

const TooltipContent = ({
  ref,
  style,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  const { context, refs, getFloatingProps, floatingStyles } =
    useTooltipContext();

  const mergedRef = useMergeRefs([refs.setFloating, ref]);

  const { isInstantPhase, currentId } = useDelayGroup(context, {
    id: context.floatingId,
  });

  const isCurrentTooltip = currentId === context.floatingId;

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: isInstantPhase
      ? {
          open: INSTANT_DURATION,
          close: isCurrentTooltip ? DEFAULT_DURATION : INSTANT_DURATION,
        }
      : DEFAULT_DURATION,
    initial: {
      opacity: 0,
    },
  });

  if (!isMounted) return null;

  return (
    <FloatingPortal>
      <div
        ref={mergedRef}
        className="bg-black/75 rounded-md text-white p-2 text-label z-9999"
        style={{
          ...floatingStyles,
          ...style,
          ...styles,
        }}
        {...getFloatingProps(props)}
      />
    </FloatingPortal>
  );
};

interface TooltipProps
  extends Pick<
      ComponentProps<typeof TooltipTrigger>,
      "children" | "className" | "ref"
    >,
    TooltipOptions {
  title: ReactNode | string | undefined | null;
}
const FloatingTooltip = ({
  children,
  className,
  ref,
  title,
  ...options
}: TooltipProps) => {
  if (!title) return <>{children}</>;

  return (
    <TooltipRoot {...options}>
      <TooltipTrigger className={className} ref={ref}>
        {children}
      </TooltipTrigger>
      <TooltipContent>{title}</TooltipContent>
    </TooltipRoot>
  );
};

export default FloatingTooltip;
