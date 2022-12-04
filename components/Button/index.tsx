import { VariantProps } from "@stitches/react";
import { ReactNode } from "react";
import { Root } from "./styled";

interface ButtonProps extends VariantProps<typeof Root> {
  children?: ReactNode;
}
const Button = ({ children, ...props }: ButtonProps) => {
  return <Root {...props}>{children}</Root>;
};

export default Button;
