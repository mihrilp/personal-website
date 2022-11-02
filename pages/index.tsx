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
    <div className="flex flex-col justify-center">
      <Head>
        <title>Mihriban Alp</title>
      </Head>
      <div className="text-justify">
        <p className="mb-5 text-lg font-light"> Hey there, my name is:</p>
        <h2 className="font-bold text-5xl mb-3 font-roboto text-blue">
          Mihriban Alp.
        </h2>
        <h2 className="font-bold text-5xl mb-7 font-roboto">
          I&apos;m a Software Developer.
        </h2>
        <p className="mb-5 text-lg font-light leading-7">
          Currently I&apos;m working at
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
        <Connect />
      </div>
    </div>
  );
};

export default Home;
