import Screen from "components/Screen";
import H1 from "components/Typography/H1";
import styles from "components/Screen/Landing/Landing.module.css";
import Box from "components/Box";
import logoSide from "public/logo-side.svg";
import Logo from "components/Logo";
import Flex from "components/Flex";
import H2 from "components/Typography/H2";
import Socials from "components/Socials";
import landing1 from "public/landing-1.jpg";
import landing2 from "public/landing-2.jpg";
import landing3 from "public/landing-3.jpg";
import ScrollHint from "components/ScrollHint";
import classNames from "helpers/classNames";
import { CALENDLY } from "constants/links";
import ButtonLink from "components/Button/Link";
import Carousel from "components/Carousel";
import Slide from "components/Slide";
import ResponsiveHeading from "components/Screen/Landing/ResponsiveHeading";
import Banner from "components/Banner";

const ScreenLanding = () => {
	return (
		<Screen>
			<Carousel
				headingDesktop={
					<Flex
						direction="column"
						align="center"
						className={styles.socialHeadingBlock}
					>
						<H2 className={styles.socialHeading}>
							Réalisons les contenus qui feront parler de toi
						</H2>
						<Socials />
					</Flex>
				}
			>
				<Slide
					headingDesktop={
						<H2 className={styles.heading}>
							Je crée une expérience unique avec du contenu percutant et
							chaleureux
						</H2>
					}
					heading={
						<H1 className={styles.heading}>
							<ResponsiveHeading
								desktop="Des podcasts qui feront résonner ton message"
								mobile="Réalisons les contenus qui feront parler de toi"
							/>
						</H1>
					}
					src={landing1}
					priority
					fill
					alt=""
				/>
				<Slide
					headingDesktop={
						<H2 className={styles.heading}>
							Je crée une expérience unique avec du contenu percutant et
							chaleureux
						</H2>
					}
					heading={
						<H1 className={styles.heading}>
							<ResponsiveHeading
								desktop="Des podcasts qui feront résonner ton message"
								mobile="Je crée une expérience unique avec du contenu percutant et chaleureux"
							/>
						</H1>
					}
					src={landing2}
					priority
					fill
					alt=""
				/>
				<Slide
					headingDesktop={
						<H2 className={styles.heading}>
							Je crée une expérience unique avec du contenu percutant et
							chaleureux
						</H2>
					}
					heading={
						<H1 className={styles.heading}>
							Des podcasts qui feront résonner ton message
						</H1>
					}
					src={landing3}
					priority
					fill
					alt=""
				/>
			</Carousel>
			<Flex className={styles.presentation}>
				<Flex className={styles.author} direction="column">
					<H2>Floé Gaubert</H2>
					<H2>Rédactrice & Podcasteuse</H2>
				</Flex>
				<Logo alt="" priority src={logoSide} />
			</Flex>
			<Banner
				className={styles.banner}
				tags={["Interview", "Rédaction", "Podcast", "Photo", "Vidéo"]}
			/>

			<Flex className={styles.links}>
				<Socials />
				<ButtonLink
					variant="contained"
					href={CALENDLY}
					className={classNames(styles.cta, styles.mobile)}
				>
					Je prends rendez-vous
				</ButtonLink>
				<ScrollHint className={styles.hint} href="#" />
			</Flex>
		</Screen>
	);
};

export default ScreenLanding;
