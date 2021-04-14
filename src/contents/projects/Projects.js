import React from "react";
import "./projects.scss";
import { Container, Row, Col } from "react-bootstrap";
import Project from "../../components/project/Project";

const Projects = () => {
  return (
    <Container className="projects">
      <Col className="title">
        <p>Best Projects</p>
      </Col>
      <Row className="projectList">
        <Col>
          <Project
            projectName="Scientific Calculator"
            linkUrl="https://github.com/mihrilp/scientific-calculator"
          />
        </Col>
        <Col>
          <Project
            projectName="To-do App"
            linkUrl="https://github.com/mihrilp/react-todoapp"
          />
        </Col>
        <Col>
          <Project projectName="Cryptocurrency Price Notifications" />
        </Col>
        <Col>
          <Project projectName="To-do App" />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
