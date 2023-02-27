import Button from "components/Button";
import Flex from "components/Flex";
import Input from "components/Input";
import Reader from "components/Reader";
import Screen from 'components/Screen'
import H1 from "components/Typography/H1";
import P from "components/Typography/P";
import Subtitle from "components/Typography/Subtitle";
import styles from "components/Screen/Hero/Hero.module.css";
import { useState } from "react";

const ScreenHero = () => {
  const [scrollDownVisible, setScrollDownVisible] = useState(false);

  const onReadEnd = () => setScrollDownVisible(true);

  return (
    <Screen>
      <Flex justify="center" className={styles.root}>
        <Flex grow direction="column" className={styles.hero}>
          <H1 className={styles.title}>
            Propulsez vos idées sur le devant de la scène
            <Subtitle>
              La promesse de contenus pertinents, originaux et optimisés SEO
            </Subtitle>
          </H1>
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
        <Flex grow justify="center">
          <Reader onReadEnd={onReadEnd} />
        </Flex>
      </Flex>
      {scrollDownVisible && (
        <div>scroll down</div>
      )}
    </Screen>
  );
}

export default ScreenHero