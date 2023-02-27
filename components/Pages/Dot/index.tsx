import { DotIcon, DotFilledIcon } from "@radix-ui/react-icons";
import IconButton from "components/IconButton";
import { ComponentProps } from "react";

interface DotProps extends ComponentProps<typeof IconButton> {
  active?: boolean;
}
const Dot = ({ active, ...props }: DotProps) => (
  <IconButton type="button" variant="small" {...props}>
    {active ? <DotFilledIcon /> : <DotIcon />}
  </IconButton>
);

export default Dot;
