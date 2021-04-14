import "./mysass.scss";
import { Container, Row, Col } from "react-bootstrap";
import Projects from "./contents/projects/Projects";
import Blogs from "./contents/blogs/Blogs";
import Contact from "./contents/contact/Contact";
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
          <p>I'm a student of Computer Engineering.</p>
          <Row className="buttonContainer">
            <p className="contactButton">Let's Connect</p>
          </Row>
        </Col>
      </Row>
      <Row className="projects">
        <Projects />
      </Row>
      <Row className="blogs">
        <Blogs />
      </Row>
      <Row className="contact">
        <Contact />
      </Row>
    </Container>
  );
}

export default App;
