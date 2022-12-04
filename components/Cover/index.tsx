import { ReactNode } from "react";
import { VariantProps } from "@stitches/react";
import { Content, Root } from "./styled";

// CONSTANTS
const CLASS_NAME = "cover";

interface CoverProps extends VariantProps<typeof Root> {
  children?: ReactNode;
}
const Cover = ({ children, ...props }: CoverProps) => (
  <Root className={CLASS_NAME} {...props}>
    <Content>{children}</Content>
  </Root>
);

Cover.toString = () => `.${CLASS_NAME}`;

export default Cover;
