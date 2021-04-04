import React from "react";
import "./projects.scss";
import { Container, Row, Col } from "react-bootstrap";
import Project from "../../components/project/Project";
import Calculator from "../../components/icons/calculator";
import Todo from "../../components/icons/todo";
import Crypto from "../../components/icons/crypto";

const Projects = () => {
  return (
    <Container className="projects">
      <Col className="title">
        <p>Projects</p>
      </Col>
      <Row className="projectList">
        <Col>
          <Project
            icon={<Calculator />}
            projectName="Scientific Calculator"
            linkUrl="https://github.com/mihrilp/scientific-calculator"
          />
        </Col>
        <Col>
          <Project
            icon={<Todo />}
            projectName="To-do App"
            linkUrl="https://github.com/mihrilp/react-todoapp"
          />
        </Col>
        <Col>
          <Project
            icon={<Crypto />}
            projectName="Cryptocurrency Price Notifications"
          />
        </Col>
        <Col>
          <Project icon={<Todo />} projectName="To-do App" />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
