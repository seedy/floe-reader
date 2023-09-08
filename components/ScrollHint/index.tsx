import { ComponentProps } from "react";
import styles from "components/ScrollHint/ScrollHint.module.scss";
import classNames from "helpers/classNames";
import DesktopWheelIcon from "components/icons/DesktopWheel";
import MobileWheelIcon from "components/icons/MobileWheel";
import ButtonLink from "components/Button/Link";
import Box from "components/Box";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";

interface ScrollHintProps extends ComponentProps<typeof Box> {
    variant?: "mobile" | "desktop"
    href?: string
}
const ScrollHint = (
    ({ className, variant = "desktop", href, ...props }: ScrollHintProps) => {
        const variantsClassName = variantsToClassNameStyles(
            { variant },
            styles
        );
        return (
            <Box
                className={classNames(styles.root, className, variantsClassName)}
                {...props}
            >
                <Box className={styles.mouse}>
                    {variant === "mobile" ? <MobileWheelIcon className={styles.wheel} /> : <DesktopWheelIcon className={styles.wheel} />}
                </Box>
                <ButtonLink href={href} className={styles.link} variant="link" color="primary" mobile={variant === "mobile"}>
                    En savoir plus
                </ButtonLink>
            </Box>
        );
    }
);

export default ScrollHint;
