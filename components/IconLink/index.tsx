import { ComponentProps, ReactNode } from "react";
import styles from "components/IconLink/IconLink.module.css";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";

interface IconLinkProps extends ComponentProps<"a"> {
  children?: ReactNode;
  variant?: "small" | "medium";
}
const IconLink = ({
  children,
  variant = "medium",
  ...props
}: IconLinkProps) => {
  const variantsClassName = variantsToClassNameStyles({ variant }, styles);
  return (
    <a className={`${styles.root} ${variantsClassName}`} {...props}>
      {children}
    </a>
  );
};

export default IconLink;
