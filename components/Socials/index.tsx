import {
	GlobeIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import IconButtonLink from "components/IconButton/Link";
import { INSTAGRAM, LINKEDIN, PORTFOLIO } from "constants/links";
import cn from "helpers/cn";

type Source = "instagram" | "linkedin" | "portfolio";

interface SocialsProps {
	className?: string;
	sources?: Record<Source, boolean>;
}
const Socials = ({
	className,
	sources = { instagram: true, linkedin: true, portfolio: true },
}: SocialsProps) => {
	if (Object.keys(sources).length === 0) {
		return null;
	}
	return (
		<div className={cn("flex items-center gap-4 p-2", className)}>
			{sources.instagram && (
				<IconButtonLink href={INSTAGRAM} target="_blank" size="small">
					<InstagramLogoIcon />
				</IconButtonLink>
			)}
			{sources.linkedin && (
				<IconButtonLink href={LINKEDIN} target="_blank" size="small">
					<LinkedInLogoIcon />
				</IconButtonLink>
			)}
			{sources.portfolio && (
				<IconButtonLink href={PORTFOLIO} target="_blank" size="small">
					<GlobeIcon />
				</IconButtonLink>
			)}
		</div>
	);
};

export default Socials;
