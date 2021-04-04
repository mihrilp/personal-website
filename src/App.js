import "./mysass.scss";
import { Container, Row, Col } from "react-bootstrap";
import Projects from "./contents/projects/Projects";
import Blogs from "./contents/blogs/Blogs";
import Image from "./components/icons/image";
import Contact from "./contents/contact/Contact";

function App() {
  return (
    <Container>
      <Row className="header">
        <Col md={8}>
          <ul className="navbar">
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </Col>
      </Row>
      <Row className="about">
        <Col md={4}>
          <Image />
        </Col>
        <Col md={8}>
          <p className="title">I'm Mihriban Alp</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            maxime quo? Odio vero dolor eaque quos beatae sunt quidem,
            reprehenderit, id nobis explicabo veritatis suscipit quaerat cum
            maiores eum blanditiis, hic deserunt repudiandae quae! Ipsa ab id et
            modi hic velit quo! Iusto quisquam numquam porro temporibus,
            delectus illo quod.
          </p>
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
