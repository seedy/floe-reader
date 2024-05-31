import Avatar from "components/Avatar";
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
}: AvatarAndContentProps) => (
	<div
		className={cn(
			"mb-4 mt-6 flex",
			"mx-5 flex-col",
			"lg:mx-10 lg:flex-row-reverse lg:justify-between lg:gap-10",
			"lg:relative lg:h-[150vh]",
		)}
	>
		<div className="mb-5 flex flex-col gap-10 lg:gap-[3.375rem]">
			<H2>{title}</H2>
			<P className="hidden lg:block">{longSubtitle}</P>
			<P className="lg:hidden">{subtitle}</P>
			<div className="hidden grow justify-between lg:flex lg:flex-col">
				{children}
				<div className="flex flex-col items-center lg:gap-3">{longCatcher}</div>
			</div>
		</div>
		<div className="flex flex-col gap-10">
			<Avatar
				src={src}
				alt={alt}
				className={cn(
					"size-80 lg:size-auto",
					"lg:aspect-[256/672] lg:max-h-[calc(100svh-4rem)] lg:w-[25vw] lg:max-w-none",
					"lg:sticky lg:overflow-hidden",
				)}
			/>
			<Subtitle className="lg:hidden">{catcher}</Subtitle>
		</div>
		<Avatar
			src={src}
			alt={alt}
			className={cn(
				"size-80 lg:size-auto",
				"lg:aspect-[256/672] lg:max-h-[calc(100svh-4rem)] lg:w-[25vw] lg:max-w-none",
				"lg:sticky lg:top-0 lg:overflow-hidden",
			)}
		/>
	</div>
);

export default AvatarAndContent;
