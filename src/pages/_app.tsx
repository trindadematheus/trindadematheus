import React from 'react'
import Head from "next/head";
import { AppProps } from "next/app";

import GlobalStyles from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;800&display=swap" rel="stylesheet" />

        <title>Matheus Trindade 👨‍💻</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}