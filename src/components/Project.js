import React from "react";
import "../styles/components/project.scss";
import { Container, Row, Col } from "react-bootstrap";

const Project = ({ image, projectName, linkUrl, description, languages }) => {
  return (
    <Container className="project ">
      <a href={linkUrl}>
        <Row>{image}</Row>
        <Row>
          <Col>
            <Row className="projectName">
              <Col>{projectName}</Col>
            </Row>
            <Row className="languages">
              <Col>{languages}</Col>
            </Row>
            <Row className="description">
              <Col>{description}</Col>
            </Row>
            <Row></Row>
          </Col>
        </Row>
      </a>
    </Container>
  );
};

export default Project;
