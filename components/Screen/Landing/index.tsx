import Image from "components/Image"
import Screen from "components/Screen"
import H1 from "components/Typography/H1"
import styles from "components/Screen/Landing/Landing.module.css"
import Box from "components/Box"
import floeDetouree from "public/FloeDetouree.png"
import cbcLogo from "public/CBC_LOGO_96.svg"
import cbcSign from "public/CBC_SIGN.png"
import Logo from "components/Logo"
import Flex from "components/Flex"
import H2 from "components/Typography/H2"
import Socials from "components/Socials"
import Video from "components/Video"
import ScrollHint from "components/ScrollHint"
import classNames from "helpers/classNames"
import { CALENDLY } from "constants/links"
import ButtonLink from "components/Button/Link"

const ScreenLanding = () => {
  return (
    <Screen>
      <Box className={styles.videoBlock}>
        <H1 className={classNames(styles.heading, styles.appear)}>Ensemble, réalisons les contenus qui feront parler de toi</H1>
        <Box className={styles.videoWrapper}>
          <Video
            className={styles.bgVideo}
            muted
            loop
            autoPlay
            playsInline
            preload="auto"
            src={"/Hero-c1.mp4"}
            title="Ensemble, réalisons les contenus qui feront parler de toi"
          />
        </Box>
        <ButtonLink variant="contained" href={CALENDLY} className={classNames(styles.cta, styles.desktop, styles.appear)}>Planifier un RDV</ButtonLink>
        <Logo alt="CBenCorrec'" priority src={cbcLogo} className={classNames(styles.logo, styles.appear)} />
        <Image alt="Floé Gaubert" placeholder="empty" priority src={floeDetouree} className={classNames(styles.character, styles.appear)} />
      </Box>
      <Flex className={styles.presentation}>
        <Flex className={styles.author} direction="column">
          <H2>Floé Gaubert</H2>
          <H2>Conceptrice rédactrice</H2>
        </Flex>
        <Logo alt="CBenCorrec" priority src={cbcSign} className={classNames(styles.sign, styles.desktop)} />
      </Flex>
      <Flex className={styles.links}>
        <Logo alt="CBenCorrec" priority src={cbcSign} className={classNames(styles.sign, styles.mobile)} />
        <Socials />
        <ButtonLink variant="contained" href={CALENDLY} className={classNames(styles.cta, styles.mobile)}>Planifier un RDV</ButtonLink>
        <ScrollHint className={styles.hint} />
      </Flex>
    </Screen>
  )
}

export default ScreenLanding