import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.scss";
import * as Icons from "../../components/icons";

const Footer = () => {
  return (
    <Container>
      <Row className="title">
        <Col>Let's Connect:</Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Icons.Github className="socialIcon" />
        </Col>
        <Col>
          <Icons.Twitter className="socialIcon" />
        </Col>
        <Col>
          <Icons.Linkedin className="socialIcon" />
        </Col>
        <Col>
          <Icons.Spotify className="socialIcon" />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Footer;
