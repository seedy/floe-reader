import { VariantProps } from "@stitches/react";
import { Root } from "components/Calc/styled";
import { ReactNode } from "react";

interface CalcProps extends VariantProps<typeof Root> {
  children?: ReactNode;
}

const Calc = ({ children }: CalcProps) => <Root>{children}</Root>;

export default Calc;
