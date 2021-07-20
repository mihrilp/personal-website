import React from "react";
import "../styles/components/project.scss";
import { Container, Row, Col } from "react-bootstrap";

const Project = ({ image, projectName, linkUrl, description }) => {
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
            <Row></Row>
          </Col>
        </Row>
      </a>
    </Container>
  );
};

export default Project;
