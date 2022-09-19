import { VariantProps } from "@stitches/react";
import { ReactNode } from "react";
import { Root } from "./styled";
interface BookProps extends VariantProps<typeof Root> {
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
const Book = ({ children, ...props }: BookProps) => {
  return <Root {...props}>{children}</Root>;
};

export default Book;
