import Image from "next/image";
import { ComponentProps } from "react";
import styles from "components/Avatar/Avatar.module.css";

// CONSTANTS
const SIZE = 160;

// COMPONENTS
export interface AvatarProps extends ComponentProps<typeof Image> {}

const Avatar = ({ src, alt, className, ...props }: AvatarProps) => (
  <Image
    className={`${styles.root} ${className}`}
    width={SIZE}
    height={SIZE}
    src={src || `https://picsum.photos/${SIZE}`}
    alt={alt}
    placeholder="blur"
    {...props}
  />
);

export default Avatar;
