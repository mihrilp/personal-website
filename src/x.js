import React from "react";
import "./x.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Star, Fork, Circle } from "../icons/";

const XProject = ({
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
        <Row>
          <Col>
            <Row className="projectName">
              <Col>{projectName}</Col>
            </Row>
            <Row></Row>
            <Row className="description">
              <Col>
                {" "}
                <p>{description}</p>
                <p>
                  <Circle className="icon" />
                  made with {language}
                </p>
              </Col>
            </Row>
            <Row>
              <Col></Col>
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
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </a>
    </Container>
  );
};

export default XProject;
