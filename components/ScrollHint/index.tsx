import { ComponentProps } from "react";
import styles from "components/ScrollHint/ScrollHint.module.scss";
import classNames from "helpers/classNames";
import IconButtonLink from "components/IconButton/Link";
import LongArrowDownIcon from "components/icons/LongArrowDown";

interface ScrollHintProps extends ComponentProps<typeof IconButtonLink> {
}
const ScrollHint = (
    ({ children, className, ...props }: ScrollHintProps) => {
        return (
            <IconButtonLink
                variant="large"
                className={classNames(className, styles.root)}
                {...props}
            >
                <LongArrowDownIcon className={styles.arrow} />
                Scroll down
            </IconButtonLink>
        );
    }
);

export default ScrollHint;
