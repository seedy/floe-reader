import styles from "components/Video/Video.module.css";
import classNames from "helpers/classNames";
import { ComponentProps } from "react";

interface VideoProps extends ComponentProps<"video"> {
    src: string
    title: string
}
const Video = ({ src, title, className, ...props }: VideoProps) => {
    return (
        <video
            className={classNames(styles.player, className)}
            src={src}
            title={title}
            {...props}
        />
    )
}

export default Video