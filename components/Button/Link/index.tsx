import { ComponentProps, ElementRef, forwardRef, ReactNode } from "react";
import styles from "components/Button/Link/Link.module.css";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import classNames from "helpers/classNames";

interface ButtonLinkProps extends ComponentProps<"a"> {
  children?: ReactNode;
  variant?: "contained" | "outlined" | "text";
}
const ButtonLink = forwardRef<ElementRef<"a">, ButtonLinkProps>(
  ({ children, variant = "outlined", className, ...props }, forwardedRef) => {
    const variantsClassName = variantsToClassNameStyles({ variant }, styles);
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
