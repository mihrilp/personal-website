import React from "react";
import "./project.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Star, Fork, Circle } from "../icons/";

const Project = ({
  image,
  projectName,
  linkUrl,
  description,
  language,
  stars,
  forks,
}) => {
  return (
    <Container className="project">
      <a href={linkUrl}>
        <Row className="image">{image}</Row>
        <Row className="name">
          <Col>{projectName}</Col>
        </Row>
        <Row className="description">
          <Col>{description}</Col>
        </Row>
      </a>
    </Container>
  );
};

export default Project;
