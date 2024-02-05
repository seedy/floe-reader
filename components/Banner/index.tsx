import styles from "components/Banner/Banner.module.scss";
import BannerScrollAnimation from "components/Banner/ScrollAnimation";
import P from "components/Typography/P";
import classNames from "helpers/classNames";

interface BannerProps {
	tags: string[];
	className?: string;
}
const Banner = ({ tags, className }: BannerProps) => {
	return (
		<div className={classNames(styles.root, className)}>
			<BannerScrollAnimation className={styles.content}>
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
			</BannerScrollAnimation>
		</div>
	);
};

export default Banner;
