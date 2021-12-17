import Head from "next/head";
import { LatestPost } from "../components";
import { Alien } from "../components/icons";
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
    <div className="homeContainer">
      <Head>
        <title>Mihriban Alp</title>
      </Head>
      <div className="welcome">
        <h2 className="title">
          Hey there, I&apos;m Mihriban <Alien />
        </h2>
        <p>
          I&apos;m a third-year student of Computer Engineering. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Amet cum temporibus
          fugiat culpa unde vel corrupti, quasi tempora dignissimos ut?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quos, corrupti!
          Welcome to my personal website.
        </p>
      </div>
      <div>
        <h2 className="title">Latest Posts</h2>
        {data.map((post, key) => (
          <LatestPost
            key={key}
            url={post.url}
            title={post.title}
            date={post.readable_publish_date}
            description={post.description}
            reactions={post.public_reactions_count}
            comments={post.comments_count}
          />
        ))}
      </div>
    </div>
  );
}
