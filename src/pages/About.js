import React from "react";
import "../styles/pages/about.scss";
import { Container, Row, Col } from "react-bootstrap";
import * as Icons from "../components/icons";

const About = () => {
  return (
    <Container className="aboutContainer">
      <Row className="about">
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
          <p className="socialIcons">
            Let's Connect : <Icons.Twitter2 className="socialIcon" />
            <Icons.Github2 className="socialIcon" />
            <Icons.Linkedin2 className="socialIcon" />
            <Icons.Spotify2 className="socialIcon" />
          </p>
        </Col>
        <Col></Col>
        <Col md={4}>
          <img className="image" src="./images/pp.jpeg" alt="me" />
        </Col>
      </Row>
      <Row className="title">
        <Col>
          <p>Skills:</p>
        </Col>
      </Row>
      <Row>
        <Col className="skills" md={8}>
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
            <Col>
              <Icons.Python className="icon" />
              PYTHON
            </Col>
            <Col>
              <Icons.React className="icon" />
              REACT
            </Col>
            <Col>
              <Icons.VsCode className="icon" />
              VS CODE
            </Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default About;
