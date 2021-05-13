import React from "react";
import "./bestProject.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Star, Fork, Circle } from "../icons/";

const BestProject = ({
  projectName,
  linkUrl,
  description,
  language,
  stars,
  forks,
}) => {
  return (
    <Container className="bestProject">
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
              </Col>
            </Row>
            <Row>
              <Col></Col>
            </Row>
            <Row className="bottomLine">
              <Col>
                {" "}
                <p>
                  <Circle className="icon" /> {language}
                </p>
              </Col>
              <Col>
                <Star className="icon" />
                {stars} Star
              </Col>
              <Col>
                <Fork className="icon" />
                {forks} Fork
              </Col>
            </Row>
          </Col>
        </Row>
      </a>
    </Container>
  );
};

export default BestProject;
