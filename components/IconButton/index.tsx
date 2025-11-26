import { VariantProps } from "class-variance-authority";
import { iconButtonVariants } from "components/IconButton/variants";
import Tooltip, { type TooltipVariant } from "components/Tooltip";
import cn from "helpers/cn";
import { ComponentProps, ReactNode } from "react";

interface IconButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof iconButtonVariants> {
  children?: ReactNode;
  "aria-label"?: string;
  tooltip: string;
  tooltipVariant?: TooltipVariant;
}
const IconButton = ({
  children,
  size = "medium",
  variant = "outlined",
  className,
  ref: forwardedRef,
  "aria-label": ariaLabel,
  tooltip,
  tooltipVariant,
  ...props
}: IconButtonProps) => {
  const iconButtonVariantsClassName = iconButtonVariants({ size, variant });

  return (
    <Tooltip title={tooltip} variant={tooltipVariant}>
      <button
        type="button"
        ref={forwardedRef}
        className={cn(iconButtonVariantsClassName, className)}
        aria-label={ariaLabel ?? tooltip}
        {...props}
      >
        {children}
      </button>
    </Tooltip>
  );
};

export default IconButton;
