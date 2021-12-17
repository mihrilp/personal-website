import Head from "next/head";
import { Layout } from "../components/navbar";
import * as Icons from "../components/icons";
import axios from "axios";

export async function getStaticProps() {
  const { data } = await axios.get(
    "https://dev.to/api/articles?username=mihrilp"
  );
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  console.log(data[0]);
  return (
    <>
      {" "}
      <h2>Anasayfa</h2>
    </>
    /* // <Flex direction="column">
    //   <Head>
    //     <title>Mihriban Alp</title>
    //   </Head>
    //   <Flex direction="column" style={{ textAlign: "center" }}>
    //     <Title>
    //       Hey there, I&apos;m Mihriban <Icons.Alien />
    //     </Title>
    //     <p>
    //       I&apos;m a third-year student of Computer Engineering. Lorem ipsum
    //       dolor sit amet, consectetur adipisicing elit. Amet cum temporibus
    //       fugiat culpa unde vel corrupti, quasi tempora dignissimos ut?Lorem
    //       ipsum dolor sit amet consectetur adipisicing elit. Quos, corrupti!
    //       Welcome to my personal website.
    //     </p>
    //   </Flex>
    //   <Section>
    //     <Title>Latest Posts</Title>
    //     {data.map((item, key) => (
    //       <LatestPost
    //         key={key}
    //         url={item.url}
    //         title={item.title}
    //         date={item.readable_publish_date}
    //         description={item.description}
    //       />
    //     ))}
    //   </Section>
    // </Flex> */
  );
}
