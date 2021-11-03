import Head from "next/head";
import Navbar from "../components/navbar";
import LatestPost from "../components/LatestPost";
import * as Icons from "../components/icons";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
`;

const Title = styled.h2`
  font-size: 34px;
  margin-bottom: 45px;
  font-weight: bold;
  color: #26c6da;
  margin-bottom: 45px;
`;

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
    <Container>
      <Head>
        <title>Mihriban Alp</title>
      </Head>
      <Navbar />
      <Section>
        <Title>
          Hey there, I'm Mihriban <Icons.Alien />
        </Title>
        <p>
          I'm a third-year student of Computer Engineering. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Amet cum temporibus fugiat
          culpa unde vel corrupti, quasi tempora dignissimos ut?Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quos, corrupti! Welcome
          to my personal website.
        </p>
      </Section>
      <Section>
        <Title>Latest Posts</Title>
        {data.map((item, key) => (
          <LatestPost
            key={key}
            url={item.url}
            title={item.title}
            date={item.readable_publish_date}
            description={item.description}
          />
        ))}
      </Section>
    </Container>
  );
}
