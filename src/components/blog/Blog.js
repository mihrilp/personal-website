import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./blog.scss";
import Arrow from "../icons/Arrow";

const Blog = () => {
  return (
    <Container className="blog">
      <Row>
        <Col md={2}>
          <Row className="date">
            <p>14.04.21</p>
          </Row>
        </Col>
        <Col md={8}>
          <Row className="blogTitle">
            <p>Javascript and React</p>
          </Row>
        </Col>
        <Col md={2}>
          <Arrow className="arrowIcon" />
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
