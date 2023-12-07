import { ComponentProps, ElementRef, forwardRef, ReactNode } from "react";
import styles from "components/Button/Button.module.scss";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import classNames from "helpers/classNames";

interface ButtonProps extends ComponentProps<"button"> {
  children?: ReactNode;
  variant?: "contained" | "outlined" | "link";
  color?: 'primary' | "secondary"
}
const Button = forwardRef<ElementRef<"button">, ButtonProps>(
  ({ children, variant = "outlined", color = "primary", className, ...props }, forwardedRef) => {
    const variantsClassName = variantsToClassNameStyles({ variant, color }, styles);
    return (
      <button
        type="button"
        ref={forwardedRef}
        className={classNames(styles.root, variantsClassName, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
