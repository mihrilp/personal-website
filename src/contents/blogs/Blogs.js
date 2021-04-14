import React from "react";
import "./blogs.scss";
import Blog from "../../components/blog/Blog";
import { Container, Row, Col } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container className="blogs">
      <Col className="title">
        <p>Latest Posts</p>
      </Col>
      <Row>
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
      </Row>
    </Container>
  );
};

export default Blogs;
