import IconButton from "components/IconButton";
import { useContainerIntersecting } from "components/IconButton/Floating/useContainerIntersecting";
import Tooltip from "components/Tooltip";
import cn from "helpers/cn";
import { ComponentProps, RefObject } from "react";

interface IconButtonFloatingProps
  extends Omit<ComponentProps<typeof IconButton>, "size" | "variant"> {
  container?: RefObject<HTMLElement | null>;
}
const IconButtonFloating = ({
  className,
  children,
  container,
  tooltip,
  tooltipVariant,
  ...props
}: IconButtonFloatingProps) => {
  const isIntersecting = useContainerIntersecting({ container });

  if (!isIntersecting) return null;

  return (
    <Tooltip title={tooltip} variant={tooltipVariant}>
      <div
        className={cn(
          "group",
          "fixed",
          "lg:bottom-6 lg:right-24",
          "bottom-24 right-6",
          "w-[70px] h-[70px]",
          className
        )}
      >
        <IconButton
          className={cn(
            "animate-fly group-hover:[animation-iteration-count:1] group-focus-within:[animation-iteration-count:1]"
          )}
          size="medium"
          variant="contained"
          tooltip=""
          {...props}
        >
          {children}
        </IconButton>
      </div>
    </Tooltip>
  );
};

export default IconButtonFloating;
