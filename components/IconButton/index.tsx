import { VariantProps } from "@stitches/react";
import { ComponentProps, ReactNode } from "react";
import { Root } from "./styled";

interface IconButtonProps
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {
  children?: ReactNode;
}
const IconButton = ({ children, ...props }: IconButtonProps) => {
  return <Root {...props}>{children}</Root>;
};

export default IconButton;
