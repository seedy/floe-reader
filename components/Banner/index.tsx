import styles from "components/Banner/Banner.module.scss";
import BannerScrollAnimation from "components/Banner/ScrollAnimation";
import P from "components/Typography/P";
import cn from "helpers/cn";

interface BannerProps {
	tags: string[];
	className?: string;
}
const Banner = ({ tags, className }: BannerProps) => {
	return (
		<div className={cn(styles.root, className)}>
			<BannerScrollAnimation className={styles.content}>
				{tags.map((tag, index) => (
					<li
						className={index === tags.length - 1 ? "after:content-none" : ""}
						key={tag}
					>
						<P>{tag}</P>
					</li>
				))}
				{tags.map((tag) => (
					<li className="motion-reduce:hidden" key={tag} aria-hidden={true}>
						<P>{tag}</P>
					</li>
				))}
			</BannerScrollAnimation>
		</div>
	);
};

export default Banner;
