import Avatar from "components/Avatar";
import ParallaxAvatar from "components/Avatar/Parallax";
import styles from "components/Screen/Presentation/Content/Content.module.scss";
import PresentationContentMotionViewTimeline from "components/Screen/Presentation/Content/MotionViewTimeline";
import H2 from "components/Typography/H2";
import Subtitle from "components/Typography/Subtitle";
import cn from "helpers/cn";
import { Children, ComponentProps, ReactNode } from "react";

interface ContentProps
	extends Pick<ComponentProps<typeof Avatar>, "src" | "alt"> {
	title: ReactNode;
	children: ReactNode;
	catcher: ReactNode;
	summary?: ReactNode[];
	cta?: ReactNode;
}
const Content = ({
	title,
	children,
	catcher,
	summary,
	cta,
	src,
	alt,
}: ContentProps) => (
	<>
		<ParallaxAvatar src={src} alt={alt} />
		<div
			className={cn(
				"flex flex-col gap-10",
				"[--parallax-factor:0.625rem] motion-reduce:[--parallax-factor:0]",
				styles.root,
			)}
		>
			<div className="flex flex-col gap-10 lg:gap-16">
				<PresentationContentMotionViewTimeline>
					<H2>{title}</H2>
				</PresentationContentMotionViewTimeline>
				{summary && (
					<PresentationContentMotionViewTimeline>
						<div className="flex flex-col gap-6 lg:hidden">
							{summary.map((node, index) => (
								<PresentationContentMotionViewTimeline key={index}>
									{node}
								</PresentationContentMotionViewTimeline>
							))}
						</div>
					</PresentationContentMotionViewTimeline>
				)}
				<div className={cn("hidden lg:flex", "flex-col gap-6")}>
					{Children.map(children, (child) => (
						<PresentationContentMotionViewTimeline>
							{child}
						</PresentationContentMotionViewTimeline>
					))}
				</div>
			</div>
			<div className="flex flex-col items-center gap-10 lg:hidden">
				<PresentationContentMotionViewTimeline>
					<Avatar src={src} alt={alt} className="aspect-social w-80" />
				</PresentationContentMotionViewTimeline>
				<PresentationContentMotionViewTimeline>
					<Subtitle>{catcher}</Subtitle>
				</PresentationContentMotionViewTimeline>
			</div>
			<PresentationContentMotionViewTimeline>
				{cta}
			</PresentationContentMotionViewTimeline>
		</div>
	</>
);

export default Content;