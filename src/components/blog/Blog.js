import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./blog.scss";

const Blog = () => {
  return (
    <Container className="blog">
      <Row>
        <Col className="blogTitle">Blog #1</Col>
        <Col className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          consequatur error. Quo explicabo expedita minima quasi nisi, dolorum
          nemo repellendus!
        </Col>
        <Col className="icon"></Col>
      </Row>
    </Container>
  );
};

export default Blog;
