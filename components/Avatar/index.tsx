import { VariantProps } from "@stitches/react";
import { Root } from "components/Avatar/styled";
import { ComponentProps } from "react";

interface AvatarProps
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {}

const Avatar = ({ src, alt, ...props }: AvatarProps) => (
  <Root
    width={300}
    height={300}
    src={src || "https://picsum.photos/300"}
    alt={alt}
    placeholder="blur"
    {...props}
  />
);

export default Avatar;
