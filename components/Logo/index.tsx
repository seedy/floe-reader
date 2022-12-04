import { VariantProps } from "@stitches/react";
import { Root } from "components/Logo/styled";
import { ComponentProps } from "react";

// COMPONENTS
export interface LogoProps
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {}

const Logo = ({ src, alt, ...props }: LogoProps) => (
  <Root src={src} alt={alt} placeholder="blur" {...props} />
);

export default Logo;
