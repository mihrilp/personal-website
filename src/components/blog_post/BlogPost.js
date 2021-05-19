import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./blogPost.scss";
import { Arrow } from "../icons";

const BlogPost = ({ title, date, description, url }) => {
  return (
    <Container className="blog">
      <a href={url}>
        <Row>
          <Col>
            <Row className="blogTitle">
              <Col>
                <p>{title}</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Arrow />
          </Col>
        </Row>
        <Row className="date">
          <Col>{date}</Col>
        </Row>
        <Row className="summary">
          <Col>
            <p>{description}</p>
          </Col>
        </Row>
      </a>
    </Container>
  );
};

export default BlogPost;
