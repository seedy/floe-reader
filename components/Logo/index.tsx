import styles from "components/Logo/Logo.module.css";
import classNames from "helpers/classNames";
import Image from "next/image";
import { ComponentProps } from "react";

// COMPONENTS
export interface LogoProps extends ComponentProps<typeof Image> {}

const Logo = ({ src, alt, className, ...props }: LogoProps) => (
  <Image
    className={classNames(styles.root, className)}
    src={src}
    alt={alt}
    placeholder="blur"
    {...props}
  />
);

export default Logo;
