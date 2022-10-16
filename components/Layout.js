import Navbar from "@components/navbar/Navbar";
import Head from "next/head";
import Footer from "@components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer />
    </>
  );
}
