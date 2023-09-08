import Image from "next/image";
import { ComponentProps } from "react";
import styles from "components/Avatar/Avatar.module.scss";
import classNames from "helpers/classNames";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";

// COMPONENTS
export interface AvatarProps extends ComponentProps<typeof Image> {
  selected?: boolean
}

const Avatar = ({ src, alt, className, selected, ...props }: AvatarProps) => {
  const variantsClassName = variantsToClassNameStyles(
    { selected },
    styles
  );
  return (
    <Image
      className={classNames(styles.root, className, variantsClassName)}
      src={src}
      alt={alt}
      placeholder="blur"
      {...props}
    />
  );
}

export default Avatar;
