import { useState, useEffect } from "react";
import "./home.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LatestPost from "../../components/latest_post/LatestPost";
import BestProject from "../../components/best_project/BestProject";
import Connect from "../../components/connect/Connect";
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
  const [repos, setRepos] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/mihrilp/repos", {
      headers: {
        Authorization: `token ${process.env.REACT_APP_MY_GITHUB_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        setRepos(data.sort(dynamicSort("-stargazers_count")).slice(0, 2))
      );
  }, []);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=mihrilp")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {}, []);

  return (
    <Container className="homeContainer">
      <Row className="title">
        <Col>
          <p>
            Hey there, I'm Mihriban <Icons.Alien />
          </p>
        </Col>
      </Row>
      <Row className="about">
        <Col>
          <p>
            I'm a third-year student of Computer Engineering. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Amet cum temporibus fugiat
            culpa unde vel corrupti, quasi tempora dignissimos ut?Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quos, corrupti! Welcome
            to my personal website.
          </p>
        </Col>
      </Row>
      <Row className="title">
        <Col>
          <p>Latest Posts</p>
        </Col>
      </Row>
      <Row className="blogs">
        {posts.map((post, index) => {
          return (
            <Col key={index}>
              <LatestPost
                title={post.title}
                date={post.readable_publish_date}
                description={post.description}
                reactions={post.public_reactions_count}
                comments={post.comments_count}
                url={post.url}
              />
            </Col>
          );
        })}
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
        {repos.map((repo, index) => {
          return (
            <Col key={index}>
              <BestProject
                projectName={repo.name.replace("-", " ")}
                url={repo.html_url}
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
      <Row>
        <Col>
          <Connect />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
