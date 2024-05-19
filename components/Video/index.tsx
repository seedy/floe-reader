import cn from "helpers/cn";
import { ComponentProps } from "react";

interface VideoProps extends ComponentProps<"video"> {
	src: string;
	title: string;
}
const Video = ({ src, title, className, ...props }: VideoProps) => {
	return (
		<video
			className={cn("block aspect-video object-cover", className)}
			src={src}
			title={title}
			{...props}
		/>
	);
};

export default Video;
