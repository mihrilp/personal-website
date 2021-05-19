import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./blog.scss";
import BlogPost from "../../components/blog_post/BlogPost";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=mihrilp")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Container className="blogContainer">
      <Row className="title">
        <Col>Blog</Col>
      </Row>
      <Row>
        {posts.map((post, index) => {
          return (
            <Col key={index}>
              <BlogPost
                title={post.title}
                date={post.readable_publish_date}
                description={post.description}
                url={post.url}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Blog;
