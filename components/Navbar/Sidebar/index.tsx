import { Root, Trigger, Portal, Overlay, Content, Title, Cancel } from "@radix-ui/react-alert-dialog"
import Flex from "components/Flex"
import H1 from "components/Typography/H1"
import { ReactNode } from "react"
import styles from "components/Navbar/Sidebar/Sidebar.module.css"
import IconButtonLink from "components/IconButton/Link"
import { CalendarIcon, Cross2Icon } from "@radix-ui/react-icons"
import { CALENDLY } from "constants/links"
import IconButton from "components/IconButton"
import ButtonLink from "components/Button/Link"
import Share from "components/Share"

interface SidebarProps {
    children: ReactNode
}
const Sidebar = ({ children }: SidebarProps) => {
    return (
        <Root>
            <Trigger asChild>{children}</Trigger>
            <Portal>
                <Overlay className={styles.overlay} />
                <Content className={styles.content}>
                    <Flex align="center" justify="end" className={styles.adminRow}>
                        <Share />
                    </Flex>
                    <Flex direction="column" align="start" className={styles.linkColumn}>
                        <ButtonLink variant="link" href="#intro">Intro</ButtonLink>
                        <ButtonLink variant="link" href="#presentation">Présentation</ButtonLink>
                        <ButtonLink variant="link" href="#portfolio">Portfolio</ButtonLink>
                    </Flex>
                    <Flex className={styles.titleRow}>
                        <Title asChild><H1>Floé Gaubert</H1></Title>
                        <Flex className={styles.actions}>
                            <IconButtonLink variant="small" href={CALENDLY}>
                                <CalendarIcon />
                            </IconButtonLink>
                            <Cancel asChild>
                                <IconButton variant="small">
                                    <Cross2Icon />
                                </IconButton>
                            </Cancel>
                        </Flex>
                    </Flex>
                </Content>
            </Portal>
        </Root>
    )
}

export default Sidebar