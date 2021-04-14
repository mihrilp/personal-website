import React from "react";
import "./projects.scss";
import { Container, Row, Col } from "react-bootstrap";
import Project from "../../components/project/Project";

const Projects = () => {
  return (
    <Container className="projects">
      <Row className="title">
        <Col>
          <p>Best Projects</p>
        </Col>
      </Row>
      <Row>
        <Project
          projectName="Scientific Calculator"
          linkUrl="https://github.com/mihrilp/scientific-calculator"
        />
      </Row>
      <Row>
        <Project
          projectName="To-do App"
          linkUrl="https://github.com/mihrilp/react-todoapp"
        />
      </Row>
    </Container>
  );
};

export default Projects;
