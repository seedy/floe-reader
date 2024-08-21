import Avatar from "components/Avatar";
import ParallaxAvatar from "components/Avatar/Parallax";
import styles from "components/Screen/Presentation/Content.module.scss";
import H2 from "components/Typography/H2";
import P from "components/Typography/P";
import Subtitle from "components/Typography/Subtitle";
import cn from "helpers/cn";
import { ComponentProps, ReactNode } from "react";

interface ContentProps
	extends Pick<ComponentProps<typeof Avatar>, "src" | "alt"> {
	title: ReactNode;
	subtitle: ReactNode;
	longSubtitle: ReactNode;
	children: ReactNode;
	catcher: ReactNode;
	longCatcher: ReactNode;
	className?: string;
}
const Content = ({
	title,
	subtitle,
	longSubtitle,
	children,
	catcher,
	longCatcher,
	src,
	alt,
	className,
}: ContentProps) => (
	<>
		<ParallaxAvatar src={src} alt={alt} />
		<div
			className={cn(
				"mb-80 flex",
				"mx-5 flex-col",
				"lg:mx-10 lg:flex-row lg:justify-start lg:gap-10",
				className,
			)}
		>
			<div
				className={
					(cn("mb-5 flex flex-col gap-10 lg:gap-[3.375rem]"), styles.root)
				}
			>
				<H2>{title}</H2>
				<P className="hidden lg:block">{longSubtitle}</P>
				<P className="lg:hidden">{subtitle}</P>
				<div className="hidden grow gap-40 lg:flex lg:flex-col">
					{children}
					<div className="flex flex-col items-center lg:gap-3">
						{longCatcher}
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center gap-10 lg:hidden">
				<Avatar src={src} alt={alt} className="size-80" />
				<Subtitle>{catcher}</Subtitle>
			</div>
		</div>
	</>
);

export default Content;
