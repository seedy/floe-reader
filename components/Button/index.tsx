import { ComponentProps, ElementRef, forwardRef, ReactNode } from "react";
import styles from "components/Button/Button.module.css";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import classNames from "helpers/classNames";

interface ButtonProps extends ComponentProps<"button"> {
  children?: ReactNode;
  variant?: "contained" | "outlined" | "text";
}
const Button = forwardRef<ElementRef<"button">, ButtonProps>(
  ({ children, variant = "outlined", className, ...props }, forwardedRef) => {
    const variantsClassName = variantsToClassNameStyles({ variant }, styles);
    return (
      <button
        ref={forwardedRef}
        className={classNames(styles.root, className, variantsClassName)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
