import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Flex from "components/Flex"
import IconButtonLink from "components/IconButton/Link";
import styles from "components/Socials/Socials.module.css";
import classNames from "helpers/classNames";
import { ComponentProps } from "react";

interface SocialsProps extends ComponentProps<typeof Flex> {
}
const Socials = ({ className }: SocialsProps) => (
    <Flex className={classNames(styles.root, className)} align="center">
        <IconButtonLink
            href="https://www.instagram.com/c_ben_correc/"
            target="_blank"
            variant="small">
            <InstagramLogoIcon />
        </IconButtonLink>
        <IconButtonLink href="https://www.linkedin.com/in/flo%C3%A9-gaubert-cbencorrec/" target="_blank" variant="small">
            <LinkedInLogoIcon />
        </IconButtonLink>
    </Flex>
)

export default Socials