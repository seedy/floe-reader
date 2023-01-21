import {
  ComponentProps,
  ElementRef,
  forwardRef,
  ReactNode,
  useEffect,
  useState,
} from "react";
import styles from "components/Animate/Appear/Appear.module.css";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import classNames from "helpers/classNames";

interface AppearProps extends ComponentProps<"span"> {
  children?: ReactNode;
  on?: boolean;
  delay?: number;
}

const Appear = forwardRef<ElementRef<"span">, AppearProps>(
  (
    { className, children, on = true, delay = 0, ...props }: AppearProps,
    forwardedRef
  ) => {
    const [isAppear, setAppear] = useState(false);
    useEffect(() => {
      if (on) {
        const timeout = setTimeout(() => {
          setAppear(true);
        }, delay);
        return () => {
          clearTimeout(timeout);
        };
      }
      setAppear(false);
    }, [setAppear, delay, on]);
    const variantsClassName = variantsToClassNameStyles(
      { variant: isAppear },
      styles
    );
    return (
      <span
        className={classNames(styles.root, className, variantsClassName)}
        ref={forwardedRef}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Appear.displayName = "Appear";

export default Appear;
