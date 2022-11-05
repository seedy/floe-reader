import { styled } from "stitches.config";
import { Root } from "components/Flex/styled";
import { VariantProps } from "@stitches/react";
import { ComponentProps } from "react";

interface FlexProps
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {}

const Flex = ({ children, ...props }: FlexProps) => (
  <Root {...props}>{children}</Root>
);
export default Flex;
