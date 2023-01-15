import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import styles from "components/IconButton/IconButton.module.css";
import { ComponentProps, ReactNode } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  children?: ReactNode;
  variant?: "small" | "medium";
}
const IconButton = ({
  children,
  variant = "medium",
  ...props
}: IconButtonProps) => {
  const className = variantsToClassNameStyles({ variant }, styles);
  return (
    <button className={`${styles.root} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
