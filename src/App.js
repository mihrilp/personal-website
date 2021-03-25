import "./mysass.scss";
import { Container, Row, Col } from "react-bootstrap";
import Section from "./section/Section";
import Projects from "./contents/projects/Projects";
import About from "./contents/about/About";
import Blogs from "./contents/blogs/Blogs";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <ul className="navbar">
            <li>About</li>
            <li>Projects</li>
            <li>Blog</li>
          </ul>
        </Col>
        <Col>
          <button href="#">Contact Me</button>
        </Col>
      </Row>
      <Row>
        <div className="main">
          <div className="about">
            <Section
              title="I'm Mihriban Alp."
              color="#f24d1d"
              content={<About />}
            />
          </div>
          <div className="projects">
            <Section title="Projects" color="#a259ff" content={<Projects />} />
          </div>
          <div className="blog">
            <Section title="Blog" color="#44d55c" color={<Blogs />} />
          </div>
          <div className="contact">
            <h1>Form</h1>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default App;
