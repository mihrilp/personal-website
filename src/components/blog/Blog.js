import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./blog.scss";
import { Arrow, Date } from "../icons";

const Blog = ({ date }) => {
  return (
    <Container className="blog">
      <Row className="blogTitle">
        <Col>
          <p>Javascript and React</p>
        </Col>
      </Row>
      <Row className="summary">
        <Col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id
          ex, perspiciatis blanditiis possimus facere aspernatur quas odio
          tenetur voluptatibus cum adipisci pariatur, velit recusandae.
          Voluptatum adipisci a laudantium maiores.
        </Col>
      </Row>
      <Row className="date">
        <Col>
          <Date className="dateIcon" />
          {date}
        </Col>
        <Col>
          <Arrow />
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
