import styles from "components/Video/Video.module.css";
import classNames from "helpers/classNames";
import { UpdateIcon } from "@radix-ui/react-icons";
import { ComponentProps } from "react";

interface VideoProps extends ComponentProps<"iframe"> {
    src: string
    title: string
    clipperClassName?: string
}
const Video = ({ src, title, className, clipperClassName, ...props }: VideoProps) => {
    return (
        <>
            <div className={styles.skeleton}>
                <UpdateIcon className={styles.skeletonIcon} />
            </div>
            <div className={classNames(styles.clipper, clipperClassName)}>
                <iframe
                    className={classNames(styles.player, className)}
                    src={src} frameBorder="0" title={title} {...props} />
            </div>
        </>
    )
}

export default Video