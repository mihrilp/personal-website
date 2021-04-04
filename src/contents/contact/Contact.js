import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Facebook from "../../components/icons/facebook";
import Instagram from "../../components/icons/instagram";
import Twitter from "../../components/icons/twitter";
import Linkedin from "../../components/icons/linkedin";
import Spotify from "../../components/icons/spotify";
import Telegram from "../../components/icons/telegram";
import Github from "../../components/icons/github";
import Discord from "../../components/icons/discord";

const Contact = () => {
  return (
    <Container className="contact">
      <Col className="title">Contact</Col>
      <Row>
        <Col>
          <Facebook />
        </Col>
        <Col>
          <Instagram />
        </Col>
        <Col>
          <Twitter />
        </Col>
        <Col>
          <Linkedin />
        </Col>
        <Col>
          <Spotify />
        </Col>
        <Col>
          <Telegram />
        </Col>
        <Col>
          <Github />
        </Col>
        <Col>
          <Discord />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
