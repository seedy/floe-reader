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
				"m-0 flex min-h-[3.75rem] w-4/5 items-center overflow-hidden bg-navbar p-0",
				styles.root,
				className,
			)}
		>
			<BannerScrollAnimation
				className={cn(
					"m-0 flex min-w-fit grow list-none flex-row flex-nowrap p-0",
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
