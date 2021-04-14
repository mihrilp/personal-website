import React from "react";
import "./project.scss";
import { Container, Row } from "react-bootstrap";
import Code from "../icons/Code";

const Project = ({ projectName, linkUrl }) => {
  return (
    <Container className="project">
      <Row>
        <p className="projectName">{projectName}</p>
        <p className="explanation">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          obcaecati laboriosam porro dicta illo aperiam sunt placeat earum,
          tenetur ipsam.
        </p>
      </Row>
      <Row>
        <a className="code" href={linkUrl}>
          <Code />
        </a>
      </Row>
    </Container>
  );
};

export default Project;
