import { ComponentProps, ElementRef, forwardRef, RefObject, useImperativeHandle, useRef } from "react";
import styles from "components/TopAppBar/TopAppBar.module.scss";
import classNames from "helpers/classNames";
import Flex from "components/Flex";
import { Pencil2Icon } from "@radix-ui/react-icons";
import ButtonLink from "components/Button/Link";
import useAnimateOnScroll from "components/TopAppBar/useAnimateOnScroll";

interface TopAppBarProps extends ComponentProps<"nav"> {
    targetRef?: RefObject<HTMLElement>;
}
const TopAppBar = forwardRef<ElementRef<"nav">, TopAppBarProps>(
    ({ children, className, targetRef, ...props }, forwardedRef) => {
        const innerRef = useRef(null);
        useImperativeHandle(forwardedRef, () => innerRef?.current!, [innerRef])

        useAnimateOnScroll(innerRef, targetRef);

        return (
            <nav ref={innerRef} className={classNames(styles.root, className)} {...props}>
                <span className={styles.headline}>Floé Gaubert</span>
                <Flex className={styles.navGroup}>
                    <ButtonLink variant="text" href="#intro">Intro</ButtonLink>
                    <ButtonLink variant="text" href="#presentation">Présentation</ButtonLink>
                    <ButtonLink variant="text" href="#portfolio">Portfolio</ButtonLink>
                </Flex>
                <ButtonLink variant="contained" href="#email" className={styles.ctaLink}>
                    <Pencil2Icon />
                    Contacter
                </ButtonLink>
            </nav>
        );
    }
);

TopAppBar.displayName = "TopAppBar";

export default TopAppBar;