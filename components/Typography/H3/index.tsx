import { ComponentProps, ElementRef, forwardRef } from "react";
import styles from "components/Typography/H3/H3.module.css";
import classNames from "helpers/classNames";

interface H3Props extends ComponentProps<"h3"> { }

const H3 = forwardRef<ElementRef<"h3">, H3Props>(({ children, className, ...props }, forwardedRef) => (
  <h3 ref={forwardedRef} className={classNames(styles.root, className)} {...props}>
    {children}
  </h3>
));

H3.displayName = "H3";

export default H3;
