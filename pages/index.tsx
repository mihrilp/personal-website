import { NextPage } from "next";
import Head from "next/head";
import { Connect } from "../components";
import { FemaleDeveloper } from "../components/icons";

// export async function getStaticProps() {
//   const { data: posts } = await axios.get(
//     "https://dev.to/api/articles?username=mihrilp"
//   );
//   // const { data: projects } = await axios.get(
//   //   "https://api.github.com/users/mihrilp/repos?per_page=100"
//   // );
//   if (!posts) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: { posts },
//   };
// }

const Home: NextPage = () => {
  return (
    <div className="home">
      <Head>
        <title>Mihriban Alp</title>
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {/* <div className="home__content">
        <div className="home__content__text">
          <h2> Hey there, I&apos;m Mihriban.</h2>
          <p>
            I&apos;m a Software Engineer at{" "}
            <a href="https://www.appcent.mobi/" target="_blank">
              Appcent
            </a>
            . I&apos;m also developing mobile apps with React Native in{" "}
            <a href="https://papyonlab.com/" target="_blank">
              PapyonLab
            </a>
            . Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            obcaecati aspernatur necessitatibus vitae ea a nobis non, numquam
            labore, sed, ad dolorum sapiente iusto deleniti impedit iste quaerat
            vel modi.
          </p>
          <Connect className="home_context_social" />
        </div>
        <div>
          <FemaleDeveloper />
        </div>
      </div> */}
      <p>dlşsalş</p>
    </div>
  );
};

export default Home;
