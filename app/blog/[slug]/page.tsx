import { Title } from "@/components";
import { Click } from "@/components/icons";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

async function getPost(id: string) {
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const post = await res.json();
  return post;
}

const Heading = (props) => <h4 className="text-lg mb-2" {...props} />;
const Text = (props) => (
  <p className="text-lg font-light text-lightgray leading-8" {...props} />
);
const Pre = (props) => (
  <pre
    className="bg-gray rounded-md p-4 w-full overflow-auto my-4"
    {...props}
  />
);
const Anchor = (props) => <a className="text-white" {...props} />;
const ResponsiveImage = (props) => (
  <Image
    className="w-full h-auto my-4 rounded-md"
    width="0"
    height="0"
    sizes="100vw"
    alt={props.alt}
    {...props}
  />
);

const components = {
  h4: Heading,
  p: Text,
  pre: Pre,
  a: Anchor,
  img: ResponsiveImage,
};

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  return (
    <div>
      <Image
        className="w-full h-auto mb-7 rounded-md"
        src={post.cover_image}
        alt="cover image"
        width="0"
        height="0"
        sizes="100vw"
      />
      <Title text={post.title} />
      {/* @ts-expect-error Server Component */}
      <MDXRemote source={post.body_markdown} components={components} />
      <a
        className="flex flex-row gap-2 mt-4 text-lg text-purple"
        href="https://dev.to/mihrilp"
        target="_blank"
        aria-label="go to dev.to"
      >
        <p>Follow me on DEV.to </p>
        <Click height={25} fill="#b892ff" />
      </a>
    </div>
  );
}
