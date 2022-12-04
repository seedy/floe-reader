import { VariantProps } from "@stitches/react";
import { Root } from "components/Typography/H1/styled";
import { ComponentProps } from "react";

interface H1Props
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {}

const H1 = ({ children, ...props }: H1Props) => (
  <Root {...props}>{children}</Root>
);

export default H1;
