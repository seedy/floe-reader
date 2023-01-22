import styles from "components/Typography/P/P.module.css";
import classNames from "helpers/classNames";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import { ComponentProps } from "react";

interface PProps extends ComponentProps<"p"> {
  align?: "start" | "end";
}

const P = ({ className, children, align, ...props }: PProps) => {
  const variantsClassName = variantsToClassNameStyles({ align }, styles);
  return (
    <p
      className={classNames(styles.root, variantsClassName, className)}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
