import React from "react";
import "./project.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Circle, Star, Fork } from "../icons/";

const Project = ({
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
        <Row className="projectName">
          <Col>{projectName}</Col>
        </Row>
        <Row className="description">
          <Col>{description}</Col>
        </Row>
        <Row className="bottomLine">
          <Col className="language">
            <Circle className="icon" />
            {language}
          </Col>
          <Col>
            <Star className="icon" />
            {stars}
          </Col>
          <Col>
            <Fork className="icon" />
            {forks}
          </Col>
        </Row>
      </a>
    </Container>
  );
};

export default Project;
