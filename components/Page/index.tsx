import { VariantProps } from "@stitches/react";
import { Root } from "components/Page/styled";
import { ReactNode } from "react";

interface PageProps extends VariantProps<typeof Root> {
  children?: ReactNode;
}
const Page = ({ children, ...props }: PageProps) => (
  <Root {...props}>{children}</Root>
);

export default Page;
