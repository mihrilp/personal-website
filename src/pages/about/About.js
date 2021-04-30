import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.scss";
import * as Icons from "../../components/icons";
import Connect from "../../components/connect/Connect";

const About = () => {
  return (
    <Container className="aboutContainer">
      <Row className="about">
        <Col md={4}>
          <img className="image" src="./images/pp.jpeg" alt="me" />
        </Col>
        <Col></Col>
        <Col md={7} className="text">
          <p className="title">About me:</p>
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
      <Row className="title">
        <Col>
          <p>Skills:</p>
        </Col>
      </Row>
      <Row>
        <Col className="skills">
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
            <Col>
              <Icons.React className="icon" />
              REACT
            </Col>
          </Row>
          <Row>
            <Col>
              <Icons.Python className="icon" />
              PYTHON
            </Col>
            <Col>
              <Icons.Bootstrap className="icon" />
              BOOTSTRAP
            </Col>
            <Col>
              <Icons.VsCode className="icon" />
              VS CODE
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="title">
        <Col>
          <p>Let's Connect:</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Connect />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
