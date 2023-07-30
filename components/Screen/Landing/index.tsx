import Image from "components/Image"
import Screen from "components/Screen"
import H1 from "components/Typography/H1"
import styles from "components/Screen/Landing/Landing.module.css"
import Box from "components/Box"
import floeDetouree from "public/FloeDetouree-300-400.png"
import cbcLogo from "public/CBC_LOGO_96.svg"
import Logo from "components/Logo"

const ScreenLanding = () => {
  return (
    <Screen>
      <Box className={styles.videoBlock}>
        <H1 className={styles.heading}>Ensemble, réalisons les contenus qui feront parler de toi</H1>
        <Box className={styles.videoWrapper}>
          <iframe className={styles.videoPlayer}
            src="https://www.youtube.com/embed/wuZTCCXQJrw?autoplay=1&loop=1&playlist=wuZTCCXQJrw&mute=1&playsinline=1&fs=0&controls=0"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen></iframe>
        </Box>
        <Logo alt="CBenCorrec'" src={cbcLogo} width={96} className={styles.logo} />
        <Image alt="Floé Gaubert" src={floeDetouree} height={178} className={styles.character} />
      </Box>

    </Screen>
  )
}

export default ScreenLanding