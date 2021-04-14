import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./blog.scss";
import { Arrow, Date } from "../icons";

const Blog = () => {
  return (
    <Container className="blog">
      <Row>
        <Col md={9}>
          <Row className="blogTitle">
            <p>Blog #1</p>
          </Row>
          <Row className="date">
            <Date />
            <p>14.04.21</p>
          </Row>
          <Row className="summary">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              consequatur error. Quo explicabo expedita minima quasi nisi,
              dolorum nemo repellendus!
            </p>
          </Row>
        </Col>
        <Col md={3}>
          <Arrow className="arrow" />
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
