"use client";
import BannerScrollAnimation from "components/Banner/ScrollAnimation";
import styles from "components/Banner/Tags/Tags.module.scss";
import P from "components/Typography/P";
import cn from "helpers/cn";
import useSupportsViewTimeline from "hooks/useSupportsViewTimeline";
import dynamic from "next/dynamic";

const BannerTagsMotionViewTimeline = dynamic(
	() => import("components/Banner/Tags/MotionViewTimeline"),
);

interface BannerTagsProps {
	tags: string[];
	className?: string;
}

const liBaseClassName = "flex gap-[inherit]";
const liAfterClassName =
	"after:inline after:font-body after:text-body after:font-normal after:text-text after:content-['•']";
const liMotionReduceClassName = "motion-reduce:hidden";

const BannerTags = ({ tags, className }: BannerTagsProps) => {
	const supportsViewTimeline = useSupportsViewTimeline();
	if (supportsViewTimeline) {
		return (
			<div
				className={cn(
					"m-0 flex min-h-15 items-center overflow-hidden bg-tertiary/20 p-0",
					"w-4/5 motion-reduce:w-full",
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
	}
	return (
		<BannerTagsMotionViewTimeline>
			<div
				className={cn(
					"m-0 flex min-h-15 items-center overflow-hidden bg-tertiary/20 p-0",
					"w-4/5 motion-reduce:w-full",
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
		</BannerTagsMotionViewTimeline>
	);
};

export default BannerTags;
