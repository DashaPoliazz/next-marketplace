import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Home from ".";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marketplae</title>
        <link rel="icon" href="./favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Home />
    </>
  );
}
