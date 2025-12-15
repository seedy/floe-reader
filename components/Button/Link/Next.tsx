import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "components/Button/variants";
import cn from "helpers/cn";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

interface ButtonLinkNextProps
  extends Omit<ComponentProps<typeof Link>, "color">,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
}
const ButtonLinkNext = ({
  children,
  variant = "link",
  color = "primary",
  className,
  full,
  inline,
  ref: forwardedRef,
  ...props
}: ButtonLinkNextProps) => {
  const buttonVariantsClassName = buttonVariants({
    color,
    full,
    inline,
    variant,
  });

  return (
    <Link
      ref={forwardedRef}
      className={cn(buttonVariantsClassName, className)}
      {...props}
    >
      {children}
    </Link>
  );
};
export default ButtonLinkNext;
