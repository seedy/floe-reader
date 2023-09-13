import styles from "components/Video/Video.module.css";
import { UpdateIcon } from "@radix-ui/react-icons";
import { ComponentProps } from "react";

interface VideoProps extends ComponentProps<"iframe"> {
    src: string
    title: string
}
const Video = ({ src, title, ...props }: VideoProps) => {
    return (
        <>
            <div className={styles.skeleton}>
                <UpdateIcon className={styles.skeletonIcon} />
            </div>
            <iframe
                className={styles.player}
                src={src} frameBorder="0" title={title} {...props} />
        </>
    )
}

export default Video