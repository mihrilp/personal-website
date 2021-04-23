import { useState, useEffect } from "react";
import "./home.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogPost from "../../components/blog_post/BlogPost";
import Project from "../../components/project/Project";
import * as Icons from "../../components/icons";

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

function Home() {
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
    <Container className="container">
      <Row className="title">
        <Col>
          <p>Hey there, I'm Mihriban {<Icons.Alien />} </p>
        </Col>
      </Row>
      <Row className="about">
        <Col>
          <p>
            I'm a student of Computer Engineering. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Amet cum temporibus fugiat culpa unde
            vel corrupti, quasi tempora dignissimos ut?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quos, corrupti!
          </p>
        </Col>
      </Row>
      <Row className="title">
        <Col>
          <p>Latest Posts</p>
        </Col>
      </Row>
      <Row className="blogs">
        <Col>
          <Row>
            <BlogPost date="15.04.21" likes="25" comments="15" />
          </Row>
          <Row>
            <BlogPost date="16.04.21" likes="27" comments="13" />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="seeMore">
          <Link className="link" to="/Blog">
            <p>
              See All Posts
              <Icons.Click className="clickIcon" />
            </p>
          </Link>
        </Col>
      </Row>
      <Row className="title">
        <Col>
          <p>Best Projects</p>
        </Col>
      </Row>
      <Row className="projects">
        {repos.map((repo) => {
          return (
            <Col>
              <Project
                projectName={repo.name.replace("-", " ")}
                linkUrl={repo.html_url}
                description={repo.description}
                language={repo.language}
                stars={repo.stargazers_count}
                forks={repo.forks}
              />
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col className="seeMore">
          <Link className="link" to="/Projects">
            <p>
              See All Projects
              <Icons.Click className="clickIcon" />
            </p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
