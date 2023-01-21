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
  className,
  ...props
}: IconButtonProps) => {
  const variantsClassName = variantsToClassNameStyles({ variant }, styles);
  return (
    <button className={`${styles.root} ${className} ${variantsClassName}`} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
