import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Flex from "components/Flex"
import IconLink from "components/IconLink";
import styles from "components/Socials/Socials.module.css";

const Socials = () => (
    <Flex className={styles.root} align="center">
        <IconLink
            href="https://www.instagram.com/c_ben_correc/"
            target="_blank"
            variant="small">
            <InstagramLogoIcon />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/flo%C3%A9-gaubert-cbencorrec/" target="_blank" variant="small">
            <LinkedInLogoIcon />
        </IconLink>
    </Flex>
)

export default Socials