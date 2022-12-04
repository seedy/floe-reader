import { ResumeIcon, PauseIcon } from "@radix-ui/react-icons";
import IconButton from "components/IconButton";
import { ComponentProps } from "react";

interface PlayPauseProps extends ComponentProps<typeof IconButton> {
  playing?: boolean;
}
const PlayPause = ({ playing, ...props }: PlayPauseProps) => {
  return (
    <IconButton variant="small" {...props}>
      {playing ? <PauseIcon /> : <ResumeIcon />}
    </IconButton>
  );
};

export default PlayPause;
