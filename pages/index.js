import Head from "next/head";
import { LatestPost, BestProject, Connect } from "../components";
import { Alien, Click } from "../components/icons";
import axios from "axios";
import Link from "next/link";

export async function getStaticProps() {
  const { data: posts } = await axios.get(
    "https://dev.to/api/articles?username=mihrilp"
  );
  // const { data: projects } = await axios.get(
  //   "https://api.github.com/users/mihrilp/repos?per_page=100"
  // );
  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts },
  };
}

export default function Home({ posts }) {
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
          Creative and self-improving Front-End Developer and fourth-year
          Computer Engineering undergraduate student. Welcome to my personal
          website.
        </p>
      </div>
      <div>
        <h2 className="title">Latest Posts</h2>
        {posts.map((post, key) => (
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
        <Link href="/blog">
          <a className="seeMoreBtn">
            See all posts <Click className="clickIcon" />
          </a>
        </Link>
      </div>
      <div>
        <h2 className="title">Best Projects</h2>
        <div className="bestProjects">
          <BestProject
            url="https://github.com/mihrilp"
            projectName="scientific calculator"
            description="a scientific calculator"
            stars="7"
            language="react, react-bootsrap"
          />
          <BestProject
            url="https://github.com/mihrilp"
            projectName="scientific calculator"
            description="a scientific calculator"
            stars="7"
            language="nextjs, sass"
          />
        </div>
        <Link href="/blog">
          <a className="seeMoreBtn">
            See all projects <Click className="clickIcon" />
          </a>
        </Link>
      </div>
      <div className="social">
        <Connect />
      </div>
    </div>
  );
}
