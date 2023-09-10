import Box from "components/Box";
import Screen from "components/Screen";
import ScreenLanding from "components/Screen/Landing";
import { LOREM } from "constants/lorem";
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
        <ScreenLanding />
        <Screen>
          <Box>{LOREM}</Box>
        </Screen>
      </main>
    </div>
  );
};

export default Home;
