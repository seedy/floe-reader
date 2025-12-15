import { ExternalLinkIcon } from "@radix-ui/react-icons";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "components/Button/variants";
import cn from "helpers/cn";
import type { ComponentProps, ReactNode } from "react";

interface ButtonLinkProps
  extends Omit<ComponentProps<"a">, "color">,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  external?: boolean;
}
const ButtonLink = ({
  children,
  variant = "link",
  color = "primary",
  className,
  external,
  full,
  inline,
  ref: forwardedRef,
  ...props
}: ButtonLinkProps) => {
  const buttonVariantsClassName = buttonVariants({
    color,
    full,
    inline,
    variant,
  });

  return (
    <a
      ref={forwardedRef}
      className={cn(buttonVariantsClassName, className)}
      {...props}
    >
      {children}
      {external && <ExternalLinkIcon />}
    </a>
  );
};

export default ButtonLink;
