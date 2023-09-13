import { ComponentProps } from "react";
import styles from "components/ScrollHint/ScrollHint.module.scss";
import classNames from "helpers/classNames";
import DesktopWheelIcon from "components/icons/DesktopWheel";
import MobileWheelIcon from "components/icons/MobileWheel";
import ButtonLink from "components/Button/Link";
import Box from "components/Box";
import matchDesktop from "helpers/matchDesktop";

interface ScrollHintProps extends ComponentProps<typeof Box> {
    href?: string
}
const ScrollHint = (
    ({ className, href, ...props }: ScrollHintProps) => {
        return (
            <Box
                className={classNames(styles.root, className)}
                {...props}
            >
                <Box className={styles.mouse}>
                    {matchDesktop() ? (
                        <DesktopWheelIcon className={styles.wheel} />
                    ) : (
                        <MobileWheelIcon className={styles.wheel} />
                    )}
                </Box>
                <ButtonLink href={href} className={styles.link} variant="link" color="primary">
                    En savoir plus
                </ButtonLink>
            </Box>
        );
    }
);

export default ScrollHint;
