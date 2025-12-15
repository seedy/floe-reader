import type { VariantProps } from "class-variance-authority";
import { headingVariants } from "components/Typography/variants";
import { joinCn } from "helpers/cn";
import type { ComponentProps, ReactNode } from "react";

interface H1Props
  extends VariantProps<typeof headingVariants>,
    Omit<ComponentProps<"h1">, "color"> {
  children?: ReactNode;
  className?: string;
}

const H1 = ({
  children,
  className,
  color,
  align,
  variant = "h1",
  ref: forwardedRef,
  ...props
}: H1Props) => {
  const headingVariantClassName = headingVariants({
    align,
    color,
    variant,
  });

  return (
    <h1
      ref={forwardedRef}
      className={joinCn(headingVariantClassName, className)}
      {...props}
    >
      {children}
    </h1>
  );
};
export default H1;
