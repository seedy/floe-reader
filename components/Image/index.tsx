import NextImage from "next/image";
import { ComponentProps } from "react";
import styles from "components/Image/Image.module.css";
import classNames from "helpers/classNames";

// CONSTANTS

// COMPONENTS
export interface ImageProps extends ComponentProps<typeof NextImage> { }

const Image = ({ src, alt, className, ...props }: ImageProps) => (
  <NextImage
    className={classNames(className, styles.root)}
    src={src}
    alt={alt}
    placeholder="blur"
    {...props}
  />
);

export default Image;
