import { ComponentProps, ReactNode } from "react";
import styles from "components/IconButton/IconButton.module.scss";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import classNames from "helpers/classNames";

interface IconButtonLinkProps extends ComponentProps<"a"> {
  children?: ReactNode;
  variant?: "small" | "medium" | "large";
}
const IconButtonLink = ({
  children,
  variant = "medium",
  className,
  ...props
}: IconButtonLinkProps) => {
  const variantsClassName = variantsToClassNameStyles({ variant }, styles);
  return (
    <a className={classNames(styles.root, className, variantsClassName)} {...props}>
      {children}
    </a>
  );
};

export default IconButtonLink;
