import styles from "components/Video/Video.module.css";
import { UpdateIcon } from "@radix-ui/react-icons";
import { ComponentProps } from "react";
import Head from "next/head";

interface VideoProps extends ComponentProps<"iframe"> {
    src: string
    title: string
    preload?: boolean
}
const Video = ({ src, title, loading, preload, ...props }: VideoProps) => {

    return (
        <>
            {preload && (
                <Head>
                    <link href={src} rel="preload" as="script" />
                </Head>
            )}
            <div className={styles.skeleton}>
                <UpdateIcon className={styles.skeletonIcon} />
            </div>
            <iframe
                loading={loading}
                className={styles.player}
                src={src} frameBorder="0" title={title} {...props} />
        </>
    )
}

export default Video