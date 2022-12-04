import { VariantProps } from "@stitches/react";
import { Root } from "components/Page/styled";
import { ComponentProps, ReactNode } from "react";

// CONSTANTS
const CLASS_NAME = "page";

interface PageProps
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {
  children?: ReactNode;
}
const Page = ({ children, ...props }: PageProps) => {
  return (
    <Root className={CLASS_NAME} {...props}>
      {children}
    </Root>
  );
};

Page.toString = () => `.${CLASS_NAME}`;

export default Page;
