import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/pages/projects.scss";
import Project from "../components/Project";

const dynamicSort = (property) => {
  var sortOrder = 1;

  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function (a, b) {
    if (sortOrder === -1) {
      return b[property] - a[property];
    } else {
      return a[property] - b[property];
    }
  };
};

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/mihrilp/repos")
      .then((response) => response.json())
      .then((data) =>
        setRepos(data.sort(dynamicSort("-stargazers_count")).slice(0, 3))
      );
  }, []);

  useEffect(() => {
    if (repos.length > 0) {
      console.log(repos);
    }
  }, [repos]);

  return (
    <Container className="projectsContainer">
      <Row className="title">
        <Col>My Projects</Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
      <Row className="projects">
        {repos.length <= 0 ? (
          <p>Loading...</p>
        ) : (
          <>
            <Col>
              <Project
                image={
                  <img
                    className="image"
                    src="./images/calculator.png"
                    alt="me"
                  />
                }
                projectName={repos[0].name.replace("-", " ")}
                linkUrl={"https://github.com/mihrilp/scientific-calculator"}
                description={repos[0].description}
                languages="HTML, SCSS, REACT"
              />
            </Col>
            <Col>
              <Project
                image={
                  <img className="image" src="./images/todo.png" alt="me" />
                }
                projectName={repos[1].name.replace("-", " ")}
                linkUrl={"https://github.com/mihrilp/react-todoapp"}
                description={repos[1].description}
                languages="HTML, SCSS, REACT"
              />
            </Col>
            <Col></Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Projects;
