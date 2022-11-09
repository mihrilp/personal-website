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
            <p className="mb-5 text-lg font-light"> Hey there, my name is:</p>
            <h2 className="font-bold text-5xl mb-3 font-roboto text-blue">
              Mihriban Alp.
            </h2>
            <h2 className="font-bold text-4xl mb-7 font-roboto">
              I&apos;m a Software Engineer.
            </h2>
            <p className="mb-5 text-lg font-light leading-7 ">
              Currently I&apos;m working at
              <a href="https://www.appcent.mobi/" target="_blank">
                Appcent
              </a>
              . I&apos;m also developing mobile apps with React Native in{" "}
              <a href="https://papyonlab.com/" target="_blank">
                PapyonLab
              </a>
              . Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              obcaecati aspernatur necessitatibus vitae ea a nobis non, numquam.
            </p>
          </div>
          <div className="flex-1">
            <Space />
          </div>
        </div>
        <Connect />
      </div>
    </Layout>
  );
};

export default Home;
