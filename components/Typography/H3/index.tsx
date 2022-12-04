import { VariantProps } from "@stitches/react";
import { Root } from "components/Typography/H3/styled";
import { ComponentProps } from "react";

interface H3Props
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {}

const H3 = ({ children, ...props }: H3Props) => (
  <Root {...props}>{children}</Root>
);

export default H3;
