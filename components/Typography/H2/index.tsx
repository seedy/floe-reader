import styles from "components/Typography/H2/H2.module.css";
import classNames from "helpers/classNames";
import { ComponentProps, ElementRef, forwardRef } from "react";

interface H2Props extends ComponentProps<"h2"> { }

const H2 = forwardRef<ElementRef<"h2">, H2Props>(({ children, className, ...props }, forwardedRef) => (
  <h2 ref={forwardedRef} className={classNames(styles.root, className)} {...props}>
    {children}
  </h2>
));

H2.displayName = "H2";

export default H2;
