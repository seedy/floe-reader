import type { VariantProps } from "class-variance-authority";
import { iconButtonVariants } from "components/IconButton/variants";
import Tooltip from "components/Tooltip";
import cn from "helpers/cn";
import type { ComponentProps, ReactNode } from "react";

interface IconButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof iconButtonVariants> {
  children?: ReactNode;
  "aria-label"?: string;
  tooltip: string;
}
const IconButton = ({
  children,
  size = "medium",
  variant = "outlined",
  className,
  ref: forwardedRef,
  "aria-label": ariaLabel,
  tooltip,
  onClick,
  ...props
}: IconButtonProps) => {
  const iconButtonVariantsClassName = iconButtonVariants({ size, variant });

  return (
    <Tooltip title={tooltip}>
      <button
        type="button"
        ref={forwardedRef}
        className={cn(iconButtonVariantsClassName, className)}
        aria-label={ariaLabel ?? tooltip}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </Tooltip>
  );
};

export default IconButton;
