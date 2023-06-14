import { Title } from "@/components";
import { MDXRemote } from "next-mdx-remote/rsc";

async function getPost(id: string) {
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const post = await res.json();
  return post;
}

const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  return (
    <div className="">
      <Title text={post.title} />
      {/* @ts-expect-error Server Component */}
      <MDXRemote source={post.body_markdown} />
    </div>
  );
}
