import { ComponentProps } from "react";
import styles from "components/SwipeHint/SwipeHint.module.scss";
import classNames from "helpers/classNames";
import Box from "components/Box";
import Button from "components/Button";
import SwipeWheel from "components/icons/SwipeWheel";

interface SwipeHintProps extends ComponentProps<typeof Box> {
    onClick: () => void
}
const SwipeHint = (
    ({ className, onClick, ...props }: SwipeHintProps) => {
        return (
            <Box
                className={classNames(styles.root, className)}
                {...props}
            >
                <Box className={styles.mouse}>
                    <SwipeWheel className={styles.wheel} />
                </Box>
                <Button onClick={onClick} className={styles.link} variant="link" color="primary" mobile>
                    Glisser pour défiler
                </Button>
            </Box>
        );
    }
);

export default SwipeHint;
