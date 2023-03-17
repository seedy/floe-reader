import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import styles from "components/IconButton/IconButton.module.css";
import { ComponentProps, ReactNode } from "react";
import classNames from "helpers/classNames";

interface IconButtonProps extends ComponentProps<"button"> {
  children?: ReactNode;
  variant?: "small" | "medium" | "large";
}
const IconButton = ({
  children,
  variant = "medium",
  className,
  ...props
}: IconButtonProps) => {
  const variantsClassName = variantsToClassNameStyles({ variant }, styles);
  return (
    <button className={classNames(styles.root, className, variantsClassName)} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
