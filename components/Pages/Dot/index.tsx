import { DotIcon, DotFilledIcon } from "@radix-ui/react-icons";
import IconButton from "components/IconButton";
import { ComponentProps } from "react";

interface DotProps extends ComponentProps<typeof IconButton> {
  active?: boolean;
}
const Dot = ({ active, ...props }: DotProps) => {
  if (active) {
    return (
      <IconButton variant="small" {...props}>
        <DotFilledIcon />
      </IconButton>
    );
  }
  return (
    <IconButton variant="small" {...props}>
      <DotIcon />
    </IconButton>
  );
};

export default Dot;
