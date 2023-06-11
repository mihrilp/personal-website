import { useState, useEffect } from "react";
import { Layout, Post } from "../components";
import { fetchBlogPosts } from "../api";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await fetchBlogPosts();
      setPosts(data);
      console.log(data);
    })();
  }, []);

  return (
    <Layout title="Blog">
      <div className="flex flex-col justify-between items-center">
        <div className="flex flex-col border-b border-gray border-opacity-70 w-full">
          {posts.map((post) => (
            <Post
              key={post.slug}
              title={post.title}
              date={post.readable_publish_date}
              description={post.description}
              reactionsCount={post.public_reactions_count}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Blog;
