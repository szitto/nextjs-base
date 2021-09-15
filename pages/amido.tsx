import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import Search from "components/Search";

import styles from "styles/app.module.scss";

interface IProps {
  hello: string;
}

const Amido: NextPage<IProps> = ({ hello }): JSX.Element => (
  <div className={styles.container}>
    <Head>
      <title>Amido tech test</title>
    </Head>

    <main className={styles.main}>
      <Search />
    </main>
  </div>
);

export const getServerSideProps = async (ctx) => ({
  props: {
    hello: "Server Side Props",
  },
});

export default Amido;
