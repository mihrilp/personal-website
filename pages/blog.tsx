import { Layout, Post } from "../components";

function Blog() {
  return (
    <Layout title="Blog">
      <div className="h-3/4 flex flex-col justify-between items-center">
        <div className="flex flex-col divide-y divide-[#5b5c63] divide-opacity-50">
          <Post
            title="How to use SVGR?"
            date="October 1, 2021"
            content="Hey Everyone, this is my first post and i'll mention about SVGR. If you've never heard of it before, SVGR is an amazing tool that converts your SVGs into React components.There are a few ways for using SVGR:here are a few ways for using SVGR:here are a few ways for using SVGR:here are a few ways for using SVGR:"
          />
          <Post
            title="How to use SVGR?"
            date="2021-09-01"
            content="Hey Everyone, this is my first post and i'll mention about SVGR. If you've never heard of it before, SVGR is an amazing tool that converts your SVGs into React components.There are a few ways for using SVGR:"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Blog;
