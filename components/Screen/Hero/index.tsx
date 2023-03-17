import Button from "components/Button";
import Flex from "components/Flex";
import Input from "components/Input";
import Screen from 'components/Screen'
import P from "components/Typography/P";
import Subtitle from "components/Typography/Subtitle";
import styles from "components/Screen/Hero/Hero.module.scss";
import IconLinkScrollDown from "components/IconLink/ScrollDown";
import Box from "components/Box";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import Image from "components/Image";

import seoOptimization from 'public/seo-optimization.jpg';
import calendly from 'public/calendly.jpg';
import classNames from "helpers/classNames";
interface ScreenHeroProps {
  next: string;
}

const ScreenHero = ({ next }: ScreenHeroProps) => {
  return (
    <Screen>
      <Box className={styles.grid}>
        <Flex direction="column" className={styles.heroes}>
          <Flex direction="column" className={styles.hero}>
            <H2 className={styles.title}>
              Je raconte vos projets avec intensité et authenticité
              <Subtitle>
                La promesse de contenus pertinents, originaux et optimisés SEO
              </Subtitle>
            </H2>
            <Image width={300} height={150} src={seoOptimization} alt="Optimisation SEO" className={classNames(styles.image, styles.mobile)} />
            <Flex direction="column" className={styles.form}>
              <Input
                label="Email de contact"
                placeholder="Entrez votre adresse email"
                type="text"
                name="email"
              />
              <Button type="submit" variant="contained">
                Prendre contact
              </Button>
              <P>Un mail de prise de contact vous sera automatiquement envoyé</P>
            </Flex>
          </Flex>
          <Flex direction="column" className={styles.hero}>
            <H3 className={styles.title}>Besoin d&apos;un premier échange ?
              <Subtitle>Ensemble, parlons de votre projet !</Subtitle>
            </H3>
            <Image width={384} height={335} src={calendly} alt="RDV Calendly" className={classNames(styles.image, styles.mobile)} />
            <Flex direction="column" className={styles.form}>
              <Button type="button" variant="outlined">Planifier un premier rdv</Button>
              <P>Mon calendrier vous est ouvert !</P>
            </Flex>
          </Flex>
        </Flex>
        <Flex grow direction="row" className={styles.desktop}>
          <Flex grow direction="column" className={styles.illustration}>
            <Image width={300} height={150} src={seoOptimization} alt="Optimisation SEO" className={styles.image} />
            <Image width={384} height={335} src={calendly} alt="RDV Calendly" className={styles.image} />
          </Flex>
        </Flex>
      </Box>
    </Screen>
  );
}

export default ScreenHero