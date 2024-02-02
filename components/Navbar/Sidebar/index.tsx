import {
	Root,
	Trigger,
	Portal,
	Overlay,
	Content,
	Title,
	Cancel,
} from "@radix-ui/react-alert-dialog";
import Flex from "components/Flex";
import { ReactNode } from "react";
import styles from "components/Navbar/Sidebar/Sidebar.module.css";
import IconButtonLink from "components/IconButton/Link";
import { CalendarIcon, Cross2Icon } from "@radix-ui/react-icons";
import { CALENDLY } from "constants/links";
import IconButton from "components/IconButton";
import ButtonLink from "components/Button/Link";
import Share from "components/Share";
import Handwritten from "components/Typography/Handwritten";
import cbcLogo from "public/CBC_LOGO_48.svg";
import Logo from "components/Logo";

interface SidebarProps {
	children: ReactNode;
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
						<ButtonLink variant="link" href="#intro">
							Intro
						</ButtonLink>
						<ButtonLink variant="link" href="#presentation">
							Présentation
						</ButtonLink>
						<ButtonLink variant="link" href="#portfolio">
							Portfolio
						</ButtonLink>
					</Flex>
					<Flex className={styles.titleRow}>
						<Flex align="center" className={styles.logo}>
							<Logo src={cbcLogo} alt="CBenCorrec'" />
							<Title asChild>
								<Handwritten>Floé Gaubert</Handwritten>
							</Title>
						</Flex>
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
	);
};

export default Sidebar;
