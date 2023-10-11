import { ComponentProps, ElementRef, ReactNode, forwardRef } from "react";
import styles from "components/IconButton/IconButton.module.scss";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import classNames from "helpers/classNames";

interface IconButtonLinkProps extends ComponentProps<"a"> {
  children?: ReactNode;
  variant?: "small" | "medium" | "large";
}
const IconButtonLink = forwardRef<ElementRef<"a">, IconButtonLinkProps>(({
  children,
  variant = "medium",
  className,
  ...props
}, ref) => {
  const variantsClassName = variantsToClassNameStyles({ variant }, styles);
  return (
    <a ref={ref} className={classNames(styles.root, variantsClassName, className)} {...props}>
      {children}
    </a>
  );
});

IconButtonLink.displayName = "IconButtonLink"

export default IconButtonLink;
