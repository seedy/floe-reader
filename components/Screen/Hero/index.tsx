import ButtonLink from "components/Button/Link";
import Flex from "components/Flex";
import Screen from "components/Screen";
import styles from "components/Screen/Hero/Hero.module.css";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import P from "components/Typography/P";
import { CALENDLY } from "constants/links";
import Logo from "components/Logo";
import eidLabLogo from "public/eidlab-logo.webp";
import kinobaLogo from "public/kinoba-logo.svg";
import savoieProcessLogo from "public/savoie-process-logo.svg";

const ScreenHero = () => (
	<Screen className={styles.screen}>
		<Flex direction="column" className={styles.root}>
			<Flex direction="column" className={styles.heading}>
				<H2>Et si on commençait par se rencontrer ?</H2>
				<P>
					Toutes les grandes histoires commencent par une rencontre. Quelle est
					la tienne ?
					<br />
					Prenons le temps de parler de ton projet !
				</P>
				<H3>Ils m&apos;ont confié leur communication</H3>
				<Flex direction="column" className={styles.clients}>
					<Flex className={styles.client}>
						<Logo height={40} src={eidLabLogo} alt="Eid Lab" />
						<P className={styles.logoText}>Eid Lab</P>
					</Flex>
					<Logo height={40} src={kinobaLogo} alt="Kinoba" />
					<Logo height={40} src={savoieProcessLogo} alt="Savoie Process" />
				</Flex>
			</Flex>
			<Flex direction="column" className={styles.cta}>
				<ButtonLink variant="contained" href={CALENDLY} className={styles.cta}>
					Je prends rendez-vous
				</ButtonLink>
				<P className={styles.ctaHint}>Mon calendrier t&apos;est ouvert !</P>
			</Flex>
		</Flex>
	</Screen>
);

export default ScreenHero;
