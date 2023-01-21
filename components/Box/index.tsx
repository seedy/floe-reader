import { ComponentProps, ElementRef, forwardRef } from "react";
import styles from "components/Box/Box.module.css";
import classNames from "helpers/classNames";

interface BoxProps extends ComponentProps<"div"> {}

const Box = forwardRef<ElementRef<"div">, BoxProps>(({className, ...props}, forwardedRef) => <div ref={forwardedRef} className={classNames(styles.root, className)} {...props} />);

Box.displayName = 'Box';

export default Box;
