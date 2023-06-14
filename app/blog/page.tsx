"use client";
import { Post } from "@/components";

type Post = {
  id: string;
  title: string;
  description: string;
  readable_publish_date: string;
  public_reactions_count: number;
};

async function getPosts() {
  try {
    const username = "mihrilp";
    const res = await fetch(`https://dev.to/api/articles?username=${username}`);
    const posts = await res.json();
    return posts;
  } catch (error) {
    console.error("Error occurred while retrieving blog posts.", error);
  }
}

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div className="flex flex-col justify-between items-center">
      <div className="flex flex-col border-b border-gray border-opacity-70 w-full">
        {posts.map((post: Post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.readable_publish_date}
            description={post.description}
            reactionsCount={post.public_reactions_count}
          />
        ))}
      </div>
    </div>
  );
}
