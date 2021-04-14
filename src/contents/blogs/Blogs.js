import React from "react";
import "./blogs.scss";
import Blog from "../../components/blog/Blog";
import { Container, Row, Col } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container className="blogs">
      <Row>
        <Col className="title">
          <p>Latest Posts</p>
        </Col>
      </Row>
      <Row>
        <Blog />
      </Row>
      <Row>
        <Blog />
      </Row>
    </Container>
  );
};

export default Blogs;
