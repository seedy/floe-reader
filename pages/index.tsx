import Button from "components/Button";
import Flex from "components/Flex";
import Input from "components/Input";
import Reader from "components/Reader";
import ScreenHero from "components/Screen/Hero";
import ScreenPresentation from "components/Screen/Presentation";
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
        <ScreenHero next="#presentation" />
        <ScreenPresentation />
      </main>
    </div>
  );
};

export default Home;
