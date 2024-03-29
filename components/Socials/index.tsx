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
		<div className={cn("flex flex-col items-center p-2 gap-4", className)}>
			{sources.instagram && (
				<IconButtonLink href={INSTAGRAM} target="_blank" variant="small">
					<InstagramLogoIcon />
				</IconButtonLink>
			)}
			{sources.linkedin && (
				<IconButtonLink href={LINKEDIN} target="_blank" variant="small">
					<LinkedInLogoIcon />
				</IconButtonLink>
			)}
			{sources.portfolio && (
				<IconButtonLink href={PORTFOLIO} target="_blank" variant="small">
					<GlobeIcon />
				</IconButtonLink>
			)}
		</div>
	);
};

export default Socials;
