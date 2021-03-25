import React from "react";
import "./blogs.css";
import Blog from "../../components/blog/Blog";

const Blogs = () => {
  return (
    <div className="blog">
      <ul>
        <li>
          <Blog />
        </li>
        <li>
          <Blog />
        </li>
        <li>
          <Blog />
        </li>
      </ul>
    </div>
  );
};

export default Blogs;
