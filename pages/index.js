import Head from "next/head";
import Navbar from "../components/navbar";
import * as Icons from "../components/icons/index";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 34px;
  margin-bottom: 45px;
  font-weight: bold;
  color: #26c6da;
`;

export default function Home() {
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
      </Section>
    </Container>
  );
}
