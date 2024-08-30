import {
	GlobeIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	VideoIcon,
} from "@radix-ui/react-icons";
import IconButtonLink from "components/IconButton/Link";
import SlotTrack from "components/Slot/Track";
import { INSTAGRAM, LINKEDIN, PORTFOLIO, YOUTUBE } from "constants/links";
import cn from "helpers/cn";

type Source = "instagram" | "linkedin" | "portfolio" | "youtube";

interface SocialsProps {
	className?: string;
	sources?: Record<Source, boolean>;
}
const Socials = ({
	className,
	sources = { instagram: true, linkedin: true, portfolio: true, youtube: true },
}: SocialsProps) => {
	if (Object.keys(sources).length === 0) {
		return null;
	}
	return (
		<div className={cn("flex items-center gap-4 p-2", className)}>
			{sources.instagram && (
				<SlotTrack name="click socials instagram">
					<IconButtonLink href={INSTAGRAM} target="_blank" size="small">
						<InstagramLogoIcon />
					</IconButtonLink>
				</SlotTrack>
			)}
			{sources.linkedin && (
				<SlotTrack name="click socials linkedin">
					<IconButtonLink href={LINKEDIN} target="_blank" size="small">
						<LinkedInLogoIcon />
					</IconButtonLink>
				</SlotTrack>
			)}
			{sources.portfolio && (
				<SlotTrack name="click socials portfolio">
					<IconButtonLink href={PORTFOLIO} target="_blank" size="small">
						<GlobeIcon />
					</IconButtonLink>
				</SlotTrack>
			)}
			{sources.youtube && (
				<SlotTrack name="click socials youtube">
					<IconButtonLink href={YOUTUBE} target="_blank" size="small">
						<VideoIcon />
					</IconButtonLink>
				</SlotTrack>
			)}
		</div>
	);
};

export default Socials;
