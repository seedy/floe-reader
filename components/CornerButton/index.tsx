import { VariantProps } from "@stitches/react";
import { ReactNode } from "react";
import { Root } from "./styled";

interface CornerButtonProps extends VariantProps<typeof Root> {
  children?: ReactNode;
}

const CornerButton = ({ children, ...props }: CornerButtonProps) => {
  return <Root {...props}>{children}</Root>;
};

export default CornerButton;
