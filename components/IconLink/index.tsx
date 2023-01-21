import { ComponentProps, ReactNode } from "react";
import styles from "components/IconLink/IconLink.module.css";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import classNames from "helpers/classNames";

interface IconLinkProps extends ComponentProps<"a"> {
  children?: ReactNode;
  variant?: "small" | "medium";
}
const IconLink = ({
  children,
  variant = "medium",
  className,
  ...props
}: IconLinkProps) => {
  const variantsClassName = variantsToClassNameStyles({ variant }, styles);
  return (
    <a className={classNames(styles.root, className, variantsClassName)} {...props}>
      {children}
    </a>
  );
};

export default IconLink;
