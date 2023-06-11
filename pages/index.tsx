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
      <div className="flex flex-col gap-7 md:gap-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-left flex-2 order-2 md:order-1">
            <p className="mb-5 text-lg font-light text-lightgray">
              Hello, I&apos;m:
            </p>
            <h2 className="font-bold text-3xl  md:text-4xl mb-3 font-roboto text-purple">
              Mihriban Alp,
            </h2>
            <h2 className="font-bold text-2xl  md:text-3xl mb-7 font-roboto">
              a Software Engineer
            </h2>
            <p className="text-lg font-light text-lightgray leading-8 ">
              currently working at{" "}
              <a
                className="underline"
                href="https://www.appcent.mobi/"
                target="_blank"
                rel="noreferrer"
              >
                Appcent
              </a>
              . I&apos;m passionate about all things software and dedicated to
              creating innovative solutions through programming and development.
              Thank you for visiting my website, and I look forward to sharing
              my knowledge and experience with you!
            </p>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <Space className="w-72 md:w-80" />
          </div>
        </div>
        <Connect />
      </div>
    </Layout>
  );
};

export default Home;
