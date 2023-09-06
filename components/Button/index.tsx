import { ComponentProps, ElementRef, forwardRef, ReactNode } from "react";
import styles from "components/Button/Button.module.scss";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import classNames from "helpers/classNames";

interface ButtonProps extends ComponentProps<"button"> {
  children?: ReactNode;
  variant?: "contained" | "outlined" | "text";
  color?: 'primary' | "secondary"
  mobile?: boolean
}
const Button = forwardRef<ElementRef<"button">, ButtonProps>(
  ({ children, variant = "outlined", color = "primary", mobile, className, ...props }, forwardedRef) => {
    const variantsClassName = variantsToClassNameStyles({ variant, color, mobile }, styles);
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
