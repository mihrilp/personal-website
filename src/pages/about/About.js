import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.scss";
import * as Icons from "../../components/icons";

const About = () => {
  return (
    <Container className="aboutContainer">
      <Row className="about">
        <Col md={4}>
          <img className="image" src="./images/pp.jpg" alt="me" />
        </Col>
        <Col md={8} className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            velit ex cupiditate saepe. Facere, corrupti! Nemo, optio doloribus.
            Illo accusantium recusandae dicta qui voluptatem enim voluptatibus
            dolorum quibusdam veritatis eius. lorem20 ex cupiditate saepe.
            Facere, corrupti! Nemo, optio doloribus. Illo accusantium recusandae
            dicta qui voluptatem enim voluptatibus dolorum quibusdam veritatis
            eius. lorem20
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="title">Skills:</p>
          <Row className="skills">
            <Col>
              <Icons.Html className="icon" />
              HTML
            </Col>
            <Col>
              <Icons.Css className="icon" />
              CSS
            </Col>
            <Col>
              <Icons.Javascript className="icon" />
              JAVASCRIPT
            </Col>
            <Col>
              <Icons.React className="icon" />
              REACT
            </Col>
            <Col>
              <Icons.Python className="icon" />
              PYTHON
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
