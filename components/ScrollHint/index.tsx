import ButtonLink from "components/Button/Link";
import styles from "components/ScrollHint/ScrollHint.module.scss";
import ScrollWheelIcon from "components/icons/ScrollWheel";
import cn from "helpers/cn";
interface ScrollHintProps {
	className?: string;
	href?: string;
}
const ScrollHint = ({ className, href }: ScrollHintProps) => {
	return (
		<div className={cn(styles.root, className)}>
			<div className="relative inline-flex h-20 w-8 justify-center rounded-pill outline outline-[0.125rem] outline-primary">
				<ScrollWheelIcon className={styles.wheel} />
			</div>
			<ButtonLink
				href={href}
				className="px-4 py-1"
				variant="link"
				color="primary"
			>
				En savoir plus
			</ButtonLink>
		</div>
	);
};

export default ScrollHint;
