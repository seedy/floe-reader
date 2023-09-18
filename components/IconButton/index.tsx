import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import styles from "components/IconButton/IconButton.module.scss";
import { ComponentProps, ElementRef, ReactNode, forwardRef } from "react";
import classNames from "helpers/classNames";

interface IconButtonProps extends ComponentProps<"button"> {
  children?: ReactNode;
  variant?: "small" | "medium" | "large";
}
const IconButton = forwardRef<ElementRef<"button">, IconButtonProps>(({
  children,
  variant = "medium",
  className,
  ...props
}, forwardedRef) => {
  const variantsClassName = variantsToClassNameStyles({ variant }, styles);
  return (
    <button type="button" ref={forwardedRef} className={classNames(styles.root, className, variantsClassName)} {...props}>
      {children}
    </button>
  );
});

IconButton.displayName = "IconButton"

export default IconButton;
