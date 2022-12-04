import { VariantProps } from "@stitches/react";
import { Root } from "components/Typography/H2/styled";
import { ComponentProps } from "react";

interface H2Props
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {}

const H2 = ({ children, ...props }: H2Props) => (
  <Root {...props}>{children}</Root>
);

export default H2;
