import styles from "components/Video/Video.module.css";
import { UpdateIcon } from "@radix-ui/react-icons";

interface VideoProps {
    src: string
    title: string
}
const Video = ({ src, title }: VideoProps) => {

    return (
        <>
            <div className={styles.skeleton}>
                <UpdateIcon className={styles.skeletonIcon} />
            </div>
            <iframe
                className={styles.player}
                src={src} frameBorder="0" title={title} />
        </>
    )
}

export default Video