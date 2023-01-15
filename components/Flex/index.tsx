import { ComponentProps, forwardRef } from "react";
import styles from "components/Flex/Flex.module.css";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";

interface FlexProps extends ComponentProps<"div"> {
  direction?: "row" | "column";
  align?: "center" | "start" | "end" | "space-between";
  justify?: "center" | "start" | "end" | "space-between";
  grow?: boolean;
}

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, direction, align, justify, grow, ...props }, forwardedRef) => {
    const className = variantsToClassNameStyles(
      { direction, align, justify, grow },
      styles
    );
    return (
      <div
        className={`${styles.root} ${className}`}
        ref={forwardedRef}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = "Flex";

export default Flex;
