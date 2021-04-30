import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.scss";
import * as Icons from "../../components/icons";

const About = () => {
  return (
    <Container className="about">
      <Row>
        <Row className="image">
          <img className="me" src="./images/pp.jpg" alt="me" />
        </Row>
        <Row className="text">
          <Col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              velit ex cupiditate saepe. Facere, corrupti! Nemo, optio
              doloribus. Illo accusantium recusandae dicta qui voluptatem enim
              voluptatibus dolorum quibusdam veritatis eius. lorem20 ex
              cupiditate saepe. Facere, corrupti! Nemo, optio doloribus. Illo
              accusantium recusandae dicta qui voluptatem enim voluptatibus
              dolorum quibusdam veritatis eius. lorem20
            </p>
          </Col>
        </Row>
      </Row>
      <Row className="title">
        <Col>
          <p>Skills:</p>
        </Col>
      </Row>
      <Row className="skills">
        <Col>
          <Row style={{ marginBottom: 50 }}>
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
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Icons.React className="icon" />
              REACT
            </Col>
            <Col>
              <Icons.Python className="icon" />
              PYTHON
            </Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
