import { VariantProps } from "@stitches/react";
import { ComponentProps, ReactNode } from "react";
import { Root } from "./styled";

interface IconLinkProps
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {
  children?: ReactNode;
}
const IconLink = ({ children, ...props }: IconLinkProps) => {
  return <Root {...props}>{children}</Root>;
};

export default IconLink;
