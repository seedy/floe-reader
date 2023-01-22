import styles from "components/Screen/Screen.module.css";
import classNames from "helpers/classNames";
import { ComponentProps } from "react";

interface ScreenProps extends ComponentProps<"div"> {}

const Screen = ({ className, children, ...props }: ScreenProps) => {
  return (
    <section className={classNames(styles.root, className)} {...props}>
      {children}
    </section>
  );
};

export default Screen;
