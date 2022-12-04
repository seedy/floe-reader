import { VariantProps } from "@stitches/react";
import { ReactNode } from "react";
import { Root as StyledRoot } from "./styled";

interface RootProps extends VariantProps<typeof StyledRoot> {
  children?: ReactNode;
}
const Root = ({ children, ...props }: RootProps) => (
  <StyledRoot {...props}>{children}</StyledRoot>
);

export default Root;
