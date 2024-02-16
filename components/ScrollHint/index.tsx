import { ComponentProps } from "react";
import styles from "components/ScrollHint/ScrollHint.module.scss";
import classNames from "helpers/classNames";
import ScrollWheelIcon from "components/icons/ScrollWheel";
import ButtonLink from "components/Button/Link";
import Box from "components/Box";
interface ScrollHintProps extends ComponentProps<typeof Box> {
	href?: string;
}
const ScrollHint = ({ className, href, ...props }: ScrollHintProps) => {
	return (
		<Box className={classNames(styles.root, className)} {...props}>
			<Box className={styles.mouse}>
				<ScrollWheelIcon className={classNames(styles.wheel)} />
			</Box>
			<ButtonLink
				href={href}
				className={styles.link}
				variant="link"
				color="primary"
			>
				En savoir plus
			</ButtonLink>
		</Box>
	);
};

export default ScrollHint;
