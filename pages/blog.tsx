import { Post } from "../components";

function Blog() {
  return (
    <div className="flex flex-col justify-between items-center h-5/6">
      <div className="divide-y divide-[#5b5c63] divide-opacity-50">
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
  );
}

export default Blog;
