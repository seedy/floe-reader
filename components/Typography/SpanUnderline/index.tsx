import styles from "components/Typography/SpanUnderline/SpanUnderline.module.css";
import classNames from "helpers/classNames";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";
import { ComponentProps } from "react";

interface SpanUnderlineProps extends ComponentProps<"span"> {
    variant: 'primary' | 'secondary'

}
const SpanUnderline = ({ children, className, variant = 'primary', ...props }: SpanUnderlineProps) => {
    const variantsClassName = variantsToClassNameStyles({ variant }, styles);

    return (
        <span className={classNames(styles.root, variantsClassName, className)} {...props}>{children}</span>
    )
};

export default SpanUnderline