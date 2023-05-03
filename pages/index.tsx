import { NextPage } from "next";
import { Connect, Layout } from "../components";
import { Space } from "../components/icons";

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
    <Layout title="Mihriban Alp">
      <div className="flex flex-col justify-center">
        <div className="flex flex-row items-center space-x-8">
          <div className="text-justify flex-2">
            <p className="mb-5 text-lg font-light"> Hello, I&apos;m:</p>
            <h2 className="font-bold text-5xl mb-3 font-roboto text-blue">
              Mihriban Alp
            </h2>
            <h2 className="font-bold text-4xl mb-7 font-roboto">
              a Software Engineer.
            </h2>
            <p className="text-lg font-light leading-7 ">
              I&apos;m currently working at{" "}
              <a
                href="https://www.appcent.mobi/"
                target="_blank"
                rel="noreferrer"
              >
                Appcent
              </a>
              , where I collaborate with a team of talented engineers to develop
              cutting-edge software solutions for a diverse range of industries.
              I&apos;m passionate about all things software and dedicated to
              creating innovative solutions through programming and development.
              Thank you for visiting my website, and I look forward to sharing
              my knowledge and experience with you!
            </p>
          </div>
          <div className="flex-1">
            <Space width={340} />
          </div>
        </div>
        <Connect />
      </div>
    </Layout>
  );
};

export default Home;
