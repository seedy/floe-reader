import { ComponentProps, ReactNode } from "react";
import styles from "components/Button/Button.module.css";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";

interface ButtonProps extends ComponentProps<"button"> {
  children?: ReactNode;
  variant?: "contained" | "outlined" | "text";
}
const Button = ({ children, variant = "outlined", className, ...props }: ButtonProps) => {
  const variantsClassName = variantsToClassNameStyles({ variant }, styles);
  return (
    <button className={`${styles.root} ${className} ${variantsClassName}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
