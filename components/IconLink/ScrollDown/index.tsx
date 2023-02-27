import { ComponentProps } from "react";
import styles from "components/IconLink/ScrollDown/ScrollDown.module.css";
import classNames from "helpers/classNames";
import IconLink from "components/IconLink";
import LongArrowDownIcon from "components/icons/LongArrowDown";

interface IconLinkScrollDownProps extends ComponentProps<typeof IconLink> {
}
const IconLinkScrollDown = (
    ({ children, className, ...props }: IconLinkScrollDownProps) => {
        return (
            <IconLink
                variant="large"
                className={classNames(className, styles.root)}
                {...props}
            >
                <LongArrowDownIcon className={styles.arrow} />
                Scroll down
            </IconLink>
        );
    }
);

export default IconLinkScrollDown;
