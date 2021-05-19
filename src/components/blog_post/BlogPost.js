import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./blogPost.scss";
import { Date, Arrow } from "../icons";

const BlogPost = ({ title, date, description, url }) => {
  return (
    <Container className="blog">
      <a href={url}>
        <Row>
          <Col md={8}>
            <Row className="blogTitle">
              <Col>
                <p>{title}</p>
              </Col>
            </Row>
            <Row className="date">
              <Col>
                <Date className="icon" />
                {date}
              </Col>
            </Row>
            <Row className="summary">
              <Col>
                <p>{description}</p>
              </Col>
            </Row>
          </Col>
          <Col></Col>
          <Col md={2} className="arrow">
            <Arrow />
          </Col>
        </Row>
      </a>
    </Container>
  );
};

export default BlogPost;
