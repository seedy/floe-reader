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
import Button from "components/Button"
import Video from "components/Video"
import ScrollHint from "components/ScrollHint"

const ScreenLanding = () => {
  return (
    <Screen>
      <Box className={styles.videoBlock}>
        <H1 className={styles.heading}>Ensemble, réalisons les contenus qui feront parler de toi</H1>
        <Box className={styles.videoWrapper}>
          <Video
            src="https://player.vimeo.com/video/857902922?background=1&dnt=1&keyboard=0"
            title="Ensemble, réalisons les contenus qui feront parler de toi"
          />
        </Box>
        <Logo alt="CBenCorrec'" src={cbcLogo} className={styles.logo} />
        <Image alt="Floé Gaubert" src={floeDetouree} className={styles.character} />
      </Box>
      <Flex className={styles.author} direction="column">
        <H2>Floé Gaubert</H2>
        <H2>Conceptrice rédactrice</H2>
      </Flex>
      <Flex direction="column" align="center">
        <Logo alt="CBenCorrec" src={cbcSign} className={styles.sign} />
        <Socials />
        <Button name="contact" variant="contained" type="submit" className={styles.cta}>Prendre contact</Button>
        <ScrollHint variant="mobile" className={styles.hint} />
      </Flex>
    </Screen>
  )
}

export default ScreenLanding