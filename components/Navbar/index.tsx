import { ComponentProps, ElementRef, forwardRef, useImperativeHandle, useRef } from "react";
import styles from "components/Navbar/Navbar.module.scss";
import classNames from "helpers/classNames";
import Flex from "components/Flex";
import { CalendarIcon, EnvelopeClosedIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import ButtonLink from "components/Button/Link";
import H1 from "components/Typography/H1";
import IconButtonLink from "components/IconButton/Link";
import { CALENDLY } from "constants/links";
import IconButton from "components/IconButton";
import Sidebar from "components/Navbar/Sidebar";
import useAnimateOnScroll from "components/Navbar/useAnimateOnScroll";

interface NavbarProps extends ComponentProps<"nav"> {
}
const Navbar = forwardRef<ElementRef<"nav">, NavbarProps>(
    ({ className, ...props }, forwardedRef) => {

        const innerRef = useRef(null);
        useImperativeHandle(forwardedRef, () => innerRef?.current!, [innerRef])

        useAnimateOnScroll(innerRef);

        return (
            <nav ref={innerRef} className={classNames(styles.root, className)} {...props}>
                <Flex className={styles.content}>
                    <H1>Floé Gaubert</H1>
                    <Flex className={classNames(styles.navGroup, styles.desktop)}>
                        <ButtonLink variant="link" href="#intro">Intro</ButtonLink>
                        <ButtonLink variant="link" href="#presentation">Présentation</ButtonLink>
                        <ButtonLink variant="link" href="#portfolio">Portfolio</ButtonLink>
                    </Flex>
                    <Flex align="center" className={styles.actions}>
                        <IconButtonLink variant="small" href={CALENDLY}>
                            <CalendarIcon />
                        </IconButtonLink>
                        <IconButtonLink variant="small" href="#email" className={styles.desktop}>
                            <EnvelopeClosedIcon />
                        </IconButtonLink>
                        <Sidebar>
                            <IconButton variant="small">
                                <HamburgerMenuIcon />
                            </IconButton>
                        </Sidebar>
                    </Flex>
                </Flex>
            </nav>
        );
    }
);

Navbar.displayName = "Navbar";

export default Navbar;
