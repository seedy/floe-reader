import { VariantProps } from "class-variance-authority";
import IconButton from "components/IconButton";
import { iconButtonVariants } from "components/IconButton/variants";
import Tooltip from "components/Tooltip";
import cn from "helpers/cn";
import { ComponentProps, ReactNode } from "react";

interface IconButtonLinkProps
  extends ComponentProps<"a">,
    VariantProps<typeof iconButtonVariants>,
    Pick<
      ComponentProps<typeof IconButton>,
      "tooltip" | "tooltipVariant" | "aria-label"
    > {
  children?: ReactNode;
}
const IconButtonLink = ({
  children,
  size = "medium",
  variant = "outlined",
  className,
  ref,
  "aria-label": ariaLabel,
  tooltip,
  tooltipVariant,
  ...props
}: IconButtonLinkProps) => {
  const iconButtonVariantsClassName = iconButtonVariants({ size, variant });

  return (
    <Tooltip title={tooltip} variant={tooltipVariant}>
      <a
        ref={ref}
        className={cn(iconButtonVariantsClassName, className)}
        aria-label={ariaLabel ?? tooltip}
        {...props}
      >
        {children}
      </a>
    </Tooltip>
  );
};

export default IconButtonLink;
