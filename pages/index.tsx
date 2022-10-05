import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>GROOVY BASEMENT 🕺🪩 </title>
          <meta name="description" content="Groovy Basement Shop" />
        </Head>

        <div className={styles.main}>
          <Image
            src="/hat_v1_vector.svg"
            alt="groovy basement face logo"
            height={700}
            width={700}
          />
          stay groovy
        </div>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>{" "}
        </a>
        <a
          href="https://mitchinson.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          mitchinson.dev
        </a>
      </footer>
    </>
  );
};

export default Home;
