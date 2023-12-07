import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Flex from "components/Flex"
import IconButtonLink from "components/IconButton/Link";
import styles from "components/Socials/Socials.module.css";
import { INSTAGRAM, LINKEDIN } from "constants/links";
import classNames from "helpers/classNames";
import { ComponentProps } from "react";

interface SocialsProps extends ComponentProps<typeof Flex> {
}
const Socials = ({ className }: SocialsProps) => (
    <Flex className={classNames(styles.root, className)} align="center">
        <IconButtonLink
            href={INSTAGRAM}
            target="_blank"
            variant="small">
            <InstagramLogoIcon />
        </IconButtonLink>
        <IconButtonLink href={LINKEDIN} target="_blank" variant="small">
            <LinkedInLogoIcon />
        </IconButtonLink>
    </Flex>
)

export default Socials