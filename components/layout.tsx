import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Central Pokémon - A maior rede de tratamento Pokémon</title>
        <meta
          name="description"
          content="Central Pokémon - A maior rede de tratamento Pokémon"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
