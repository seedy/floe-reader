import styles from "components/Calc/Calc.module.css";
import { ReactNode } from "react";

interface CalcProps {
  children?: ReactNode;
}

const Calc = ({ children }: CalcProps) => (
  <div className={styles.root}>{children}</div>
);

export default Calc;
