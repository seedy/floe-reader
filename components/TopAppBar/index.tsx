import { ComponentProps, ElementRef, forwardRef } from "react";
import styles from "components/TopAppBar/TopAppBar.module.scss";
import classNames from "helpers/classNames";
import Flex from "components/Flex";

interface TopAppBarProps extends ComponentProps<"nav"> {
}
const TopAppBar = forwardRef<ElementRef<"nav">, TopAppBarProps>(
    ({ children, className, ...props }, forwardedRef) => {

        return (
            <nav ref={forwardedRef} className={classNames(styles.root, className)} {...props}>
                <span className={styles.headline}>Floé Gaubert</span>
                <Flex className={styles.navGroup}>
                    <a href="#intro">Intro</a>
                    <a href="#presentation">Présentation</a>
                    <a href="#portfolio">Portfolio</a>
                </Flex>
                <a href="#email" className={styles.ctaLink}>Prendre contact</a>
            </nav>
        );
    }
);

TopAppBar.displayName = "TopAppBar";

export default TopAppBar;
