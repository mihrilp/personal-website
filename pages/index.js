import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Navbar from "../components/Navbar/index";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Navbar />
    </Layout>
  );
}
