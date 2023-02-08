import Button from "components/Button";
import Flex from "components/Flex";
import Input from "components/Input";
import Reader from "components/Reader";
import H1 from "components/Typography/H1";
import P from "components/Typography/P";
import Subtitle from "components/Typography/Subtitle";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "pages/styles.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Floé Gaubert - Rédactrice Web & Correctrice</title>
        <meta name="description" content="Vitrine & Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Flex justify="center" className={styles.section}>
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
            <Reader />
          </Flex>
        </Flex>
      </main>
    </div>
  );
};

export default Home;
