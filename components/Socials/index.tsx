import {
	InstagramLogoIcon,
	LinkedInLogoIcon,
	GlobeIcon,
} from "@radix-ui/react-icons";
import Flex from "components/Flex";
import IconButtonLink from "components/IconButton/Link";
import styles from "components/Socials/Socials.module.css";
import { INSTAGRAM, LINKEDIN, PORTFOLIO } from "constants/links";
import classNames from "helpers/classNames";
import { ComponentProps } from "react";

type Source = "instagram" | "linkedin" | "portfolio";

interface SocialsProps extends ComponentProps<typeof Flex> {
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
		<Flex className={classNames(styles.root, className)} align="center">
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
		</Flex>
	);
};

export default Socials;
