import { VariantProps } from "@stitches/react";
import { BackSide, FrontSide, Root } from "components/Page/styled";
import { ComponentProps, ReactNode, Children } from "react";

// CONSTANTS
const CLASS_NAME = "page";

interface PageProps
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {
  children?: ReactNode;
}
const Page = ({ children, ...props }: PageProps) => (
  <Root className={CLASS_NAME} {...props}>
    {Children.map(children, (child, index) => (
      <>
        {index === 0 && <FrontSide>{child}</FrontSide>}
        {index === 1 && <BackSide>{child}</BackSide>}
      </>
    ))}
  </Root>
);

Page.toString = () => `.${CLASS_NAME}`;

export default Page;
