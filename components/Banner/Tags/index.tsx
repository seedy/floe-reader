import BannerScrollAnimation from "components/Banner/ScrollAnimation";
import styles from "components/Banner/Tags/Tags.module.scss";
import P from "components/Typography/P";
import cn from "helpers/cn";

interface BannerTagsProps {
	tags: string[];
	className?: string;
}

const liBaseClassName = "flex gap-[inherit]";
const liAfterClassName =
	"after:inline after:font-body after:text-body after:font-normal after:text-text after:content-['•']";
const liMotionReduceClassName = "motion-reduce:hidden";

const BannerTags = ({ tags, className }: BannerTagsProps) => {
	return (
		<div
			className={cn(
				"m-0 flex min-h-[3.75rem] items-center overflow-hidden bg-navbar p-0",
				"w-full supports-[animation-timeline:view()]:w-4/5 motion-reduce:w-full",
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

export default BannerTags;
