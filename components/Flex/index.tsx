import { styled } from "stitches.config";
import { Root } from "components/Flex/styled";
import { VariantProps } from "@stitches/react";
import { ComponentProps, forwardRef } from "react";

interface FlexProps
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {}

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, ...props }, forwardedRef) => (
    <Root ref={forwardedRef} {...props}>
      {children}
    </Root>
  )
);

Flex.displayName = "Flex";

export default Flex;
