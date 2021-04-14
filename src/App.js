import "./mysass.scss";
import { Container, Row, Col } from "react-bootstrap";
import Projects from "./contents/projects/Projects";
import Blogs from "./contents/blogs/Blogs";
import Alien from "./components/icons/Alien";

function App() {
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
          <p className="title">Hey there, I'm Mihriban {<Alien />}</p>
          <p>
            I'm a student of Computer Engineering. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Amet cum temporibus fugiat culpa unde
            vel corrupti, quasi tempora dignissimos ut?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quos, corrupti!
          </p>
        </Col>
      </Row>
      <Row className="blogs">
        <Blogs />
      </Row>
      <Row className="projects">
        <Projects />
      </Row>
      <Row className="contact">
        <Row className="buttonContainer">
          <p className="contactButton">Let's Connect</p>
        </Row>
      </Row>
    </Container>
  );
}

export default App;
