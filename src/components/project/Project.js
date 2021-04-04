import React from "react";
import "./project.scss";
import { Container, Row, Col } from "react-bootstrap";

const Project = ({ icon, projectName, linkUrl }) => {
  return (
    <Container className="box">
      <Row className="icon">
        <Col>{icon}</Col>
      </Row>
      <Row className="projectName">
        <Col>{projectName}</Col>
      </Row>
      <Row className="code">
        <a href={linkUrl}>for code</a>
      </Row>
    </Container>
  );
};

export default Project;
