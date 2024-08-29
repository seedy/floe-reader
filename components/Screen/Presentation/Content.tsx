import Avatar from "components/Avatar";
import ParallaxAvatar from "components/Avatar/Parallax";
import ButtonLink from "components/Button/Link";
import styles from "components/Screen/Presentation/Content.module.scss";
import H2 from "components/Typography/H2";
import P from "components/Typography/P";
import Subtitle from "components/Typography/Subtitle";
import cn from "helpers/cn";
import { ComponentProps, ReactNode } from "react";

interface ContentProps
	extends Pick<ComponentProps<typeof Avatar>, "src" | "alt"> {
	title: ReactNode;
	children: ReactNode;
	catcher: ReactNode;
	hint?: string;
	href?: string;
	className?: string;
}
const Content = ({
	title,
	children,
	catcher,
	hint,
	href,
	src,
	alt,
	className,
}: ContentProps) => (
	<>
		<ParallaxAvatar src={src} alt={alt} />
		<div className={cn("flex flex-col gap-10", className)}>
			<div className={cn("flex flex-col gap-10 lg:gap-16", styles.root)}>
				<H2>{title}</H2>
				<div className={cn("hidden lg:flex", "flex-col gap-10")}>
					{children}
				</div>
			</div>
			<div className="flex flex-col items-center gap-10 lg:hidden">
				<Avatar src={src} alt={alt} className="aspect-social w-80" />
				<Subtitle>{catcher}</Subtitle>
			</div>
			{hint && (
				<div className="flex flex-col items-center gap-10">
					<P className="text-textHint">{hint}</P>
					{href && (
						<ButtonLink variant="contained" color="primary" href={href}>
							Je prends rendez-vous
						</ButtonLink>
					)}
				</div>
			)}
		</div>
	</>
);

export default Content;
