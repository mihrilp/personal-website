import React from "react";
import "./project.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Star, Fork, Circle } from "../icons/";

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
        <Row>
          <Col className="language">
            <Circle className="icon" />
            {language}
          </Col>
        </Row>
        <Row className="description">
          <Col>{description}</Col>
        </Row>
        <Row className="bottomLine">
          <Col></Col>
          <Col>
            <Star className="icon" />
            {stars} Star
          </Col>
          <Col>
            <Fork className="icon" />
            {forks} Fork
          </Col>
        </Row>
      </a>
    </Container>
  );
};

export default Project;
