import { useState, useEffect } from "react";
import "./style.scss";
import { Container, Row, Col } from "react-bootstrap";
import Blog from "./components/blog/Blog";
import Project from "./components/project/Project";
import * as Icons from "./components/icons";

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

function App() {
  const [repos, setRepos] = useState([
    { name: "", stargazers_count: 0, language: "" },
  ]);

  useEffect(() => {
    fetch("https://api.github.com/users/mihrilp/repos")
      .then((response) => response.json())
      .then((data) =>
        setRepos(data.sort(dynamicSort("-stargazers_count")).slice(0, 2))
      );
  }, []);

  return (
    <Container>
      <Row className="header">
        <Col md={8}>
          <ul className="navbar">
            <li>Projects</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </Col>
      </Row>
      <Row className="about">
        <Col>
          <p className="title">Hey there, I'm Mihriban {<Icons.Alien />}</p>
          <p>
            I'm a student of Computer Engineering. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Amet cum temporibus fugiat culpa unde
            vel corrupti, quasi tempora dignissimos ut?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quos, corrupti!
          </p>
        </Col>
      </Row>
      <Row className="blogs">
        <Col>
          <Row>
            <Col className="title">
              <p>Latest Posts</p>
            </Col>
          </Row>
          <Row>
            <Blog />
          </Row>
          <Row>
            <Blog />
          </Row>
        </Col>
      </Row>
      <Row className="projects">
        <Col>
          <Row className="title">
            <Col>
              <p>Best Projects</p>
            </Col>
          </Row>
          <Row>
            {repos.map((repo) => {
              return (
                <Col>
                  <Project
                    projectName={repo.name.replace("-", " ")}
                    linkUrl={repo.html_url}
                    description={repo.description}
                    language={repo.language}
                  />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
      <Row className="socialIcons">
        <Col></Col>
        <Col>
          <Icons.Github className="socialIcon" />
        </Col>
        <Col>
          <Icons.Twitter className="socialIcon" />
        </Col>
        <Col>
          <Icons.Linkedin className="socialIcon" />
        </Col>
        <Col>
          <Icons.Spotify className="socialIcon" />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
