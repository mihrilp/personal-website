import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./projects.scss";
import Project from "../../components/project/Project";

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
            <Row>
              <Col>
                <Project
                  image={
                    <img className="image" src="./images/todo.png" alt="me" />
                  }
                  projectName={repos[0].name.replace("-", " ")}
                  linkUrl={repos[0].html_url}
                  description={repos[0].description}
                  language={repos[0].language}
                  stars={repos[0].stargazers_count}
                  fork={repos[0].forks}
                />
              </Col>
              <Col>
                <Project
                  image={
                    <img className="image" src="./images/todo.png" alt="me" />
                  }
                  projectName={repos[1].name.replace("-", " ")}
                  linkUrl={repos[1].html_url}
                  description={repos[1].description}
                  language={repos[1].language}
                  stars={repos[1].stargazers_count}
                  fork={repos[1].forks}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Project
                  image={
                    <img className="image" src="./images/todo.png" alt="me" />
                  }
                  projectName={repos[0].name.replace("-", " ")}
                  linkUrl={repos[0].html_url}
                  description={repos[0].description}
                  language={repos[0].language}
                  stars={repos[0].stargazers_count}
                  fork={repos[0].forks}
                />
              </Col>
              <Col>
                <Project
                  image={
                    <img className="image" src="./images/todo.png" alt="me" />
                  }
                  projectName={repos[1].name.replace("-", " ")}
                  linkUrl={repos[1].html_url}
                  description={repos[1].description}
                  language={repos[1].language}
                  stars={repos[1].stargazers_count}
                  fork={repos[1].forks}
                />
              </Col>
            </Row>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Projects;
