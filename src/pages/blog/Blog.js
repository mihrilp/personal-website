import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./blog.scss";

const Blog = () => {
  return (
    <Container className="blogContainer">
      <Row className="title">
        <Col>Blog</Col>
      </Row>
    </Container>
  );
};

export default Blog;
