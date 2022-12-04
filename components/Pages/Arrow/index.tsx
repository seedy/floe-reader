import { Left, Right } from "components/Pages/Arrow/styled";
import { ComponentProps } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

interface PagesArrowProps extends ComponentProps<typeof Left | typeof Right> {
  left?: boolean;
}
const PagesArrow = ({ left = false, ...props }: PagesArrowProps) => {
  if (left) {
    return (
      <Left {...props}>
        <ChevronLeftIcon />
      </Left>
    );
  }
  return (
    <Right {...props}>
      <ChevronRightIcon />
    </Right>
  );
};

export default PagesArrow;
