import Button from "components/Button";
import ToastProvider from "components/Toast/Provider";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToastProvider>
          <input type="text" name="email" />
          <Button type="submit">Submit</Button>
        </ToastProvider>
      </main>
    </div>
  );
};

export default Home;
