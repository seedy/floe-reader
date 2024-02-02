import styles from "components/Banner/Banner.module.scss";
import useScrollDirection from "components/Banner/useScrollDirection";
import P from "components/Typography/P";
import classNames from "helpers/classNames";
import variantsToClassNameStyles from "helpers/variantsToClassNameStyles";

interface BannerProps {
	tags: string[];
}
const Banner = ({ tags }: BannerProps) => {
	const direction = useScrollDirection();
	const directionClassNames = variantsToClassNameStyles({ direction }, styles);
	return (
		<div className={styles.root}>
			<ul className={classNames(styles.content, directionClassNames)}>
				{tags.map((tag, index) => (
					<li
						className={index === tags.length - 1 ? styles.last : ""}
						key={tag}
					>
						<P>{tag}</P>
					</li>
				))}
				{tags.map((tag) => (
					<li className={styles.duplicate} key={tag} aria-hidden={true}>
						<P>{tag}</P>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Banner;
