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
        <Row>{image}</Row>
        <Row className="text">
          <Col>
            <Row className="name">
              <Col>{projectName}</Col>
            </Row>
            <Row className="description">
              <Col>{description}</Col>
            </Row>
            <Row>
              <Col>
                <p className="language">{language}</p>
              </Col>
              <Col>
                <p className="star">
                  <Star />
                  {stars} Star
                </p>
              </Col>
              <Col>
                <p className="fork">
                  <Fork />
                  {forks} Fork
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </a>
    </Container>
  );
};

export default Project;
