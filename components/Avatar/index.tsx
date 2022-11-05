import { VariantProps } from "@stitches/react";
import { Root } from "components/Avatar/styled";
import { ComponentProps } from "react";

// CONSTANTS
const SIZE = 160;

// COMPONENTS
export interface AvatarProps
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {}

const Avatar = ({ src, alt, ...props }: AvatarProps) => (
  <Root
    width={SIZE}
    height={SIZE}
    src={src || `https://picsum.photos/${SIZE}`}
    alt={alt}
    placeholder="blur"
    {...props}
  />
);

export default Avatar;
