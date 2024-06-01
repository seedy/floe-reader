import Avatar from "components/Avatar";
import AsideAvatar from "components/Avatar/Aside";
import H2 from "components/Typography/H2";
import P from "components/Typography/P";
import Subtitle from "components/Typography/Subtitle";
import cn from "helpers/cn";
import { ComponentProps, ReactNode } from "react";

interface AvatarAndContentProps
	extends Pick<ComponentProps<typeof Avatar>, "src" | "alt"> {
	title: ReactNode;
	subtitle: ReactNode;
	longSubtitle: ReactNode;
	children: ReactNode;
	catcher: ReactNode;
	longCatcher: ReactNode;
	side?: "left" | "right";
}
const AvatarAndContent = ({
	title,
	subtitle,
	longSubtitle,
	children,
	catcher,
	longCatcher,
	src,
	alt,
	side = "left",
}: AvatarAndContentProps) => (
	<div
		className={cn(
			"mb-4 mt-6 flex",
			"mx-5 flex-col",
			"lg:relative lg:mx-10 lg:flex-row lg:gap-10",
			side === "left" ? "lg:justify-start" : "lg:justify-end",
		)}
	>
		{side === "left" && <AsideAvatar src={src} alt={alt} />}
		<div className="mb-5 flex flex-col gap-10 lg:gap-[3.375rem]">
			<H2>{title}</H2>
			<P className="hidden lg:block">{longSubtitle}</P>
			<P className="lg:hidden">{subtitle}</P>
			<div className="hidden grow gap-40 lg:flex lg:flex-col">
				{children}
				<div className="flex flex-col items-center lg:gap-3">{longCatcher}</div>
			</div>
		</div>
		{side === "right" && <AsideAvatar src={src} alt={alt} />}
		<div className="flex flex-col gap-10 lg:hidden">
			<Avatar src={src} alt={alt} className="size-80" />
			<Subtitle>{catcher}</Subtitle>
		</div>
	</div>
);

export default AvatarAndContent;
