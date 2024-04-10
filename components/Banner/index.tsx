import styles from "components/Banner/Banner.module.scss";
import BannerScrollAnimation from "components/Banner/ScrollAnimation";
import P from "components/Typography/P";
import cn from "helpers/cn";

interface BannerProps {
	tags: string[];
	className?: string;
}

const liBaseClassName = "flex gap-[inherit]";
const liAfterClassName =
	"after:inline after:font-[inherit] after:text-body after:font-normal after:text-text after:content-['•']";
const liMotionReduceClassName = "motion-reduce:hidden";

const Banner = ({ tags, className }: BannerProps) => {
	return (
		<div
			className={cn(
				"flex items-center w-full m-0 py-0 px-4 min-h-[3.75rem] overflow-hidden bg-navbar",
				styles.root,
				className,
			)}
		>
			<BannerScrollAnimation
				className={cn(
					"m-0 p-0 min-w-fit list-none flex grow flex-row flex-nowrap",
					"motion-reduce:flex-wrap motion-reduce:justify-center",
				)}
			>
				{tags.map((tag, index) => (
					<li
						className={cn(
							liBaseClassName,
							liAfterClassName,
							index === tags.length - 1 && "motion-reduce:after:content-none",
						)}
						key={tag}
					>
						<P>{tag}</P>
					</li>
				))}
				{tags.map((tag, index) => (
					<li
						className={cn(
							liBaseClassName,
							index !== tags.length - 1 && liAfterClassName,
							liMotionReduceClassName,
						)}
						key={tag}
						aria-hidden={true}
					>
						<P>{tag}</P>
					</li>
				))}
			</BannerScrollAnimation>
		</div>
	);
};

export default Banner;
