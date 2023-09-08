import { ComponentProps, ElementRef, forwardRef, ReactNode } from "react";
import styles from "components/Button/Button.module.scss";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import classNames from "helpers/classNames";

interface ButtonLinkProps extends ComponentProps<"a"> {
  children?: ReactNode;
  variant?: "contained" | "outlined" | "text";
  color?: 'primary' | "secondary"
  mobile?: boolean
}
const ButtonLink = forwardRef<ElementRef<"a">, ButtonLinkProps>(
  ({ children, variant = "outlined", color = "primary", mobile, className, ...props }, forwardedRef) => {
    const variantsClassName = variantsToClassNameStyles({ variant, color, mobile }, styles);
    return (
      <a
        ref={forwardedRef}
        className={classNames(styles.root, className, variantsClassName)}
        {...props}
      >
        {children}
      </a>
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
