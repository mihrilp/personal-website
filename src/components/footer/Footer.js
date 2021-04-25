import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.scss";
import * as Icons from "../../components/icons";

const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col md={4} className="text">
          <Row style={{ alignItems: "center" }}>
            Let's <Icons.Arrow className="arrowIcon" />
          </Row>
          <Row>Connect</Row>
        </Col>
        <Col md={8}>
          <Row>
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
            <Col>
              <Icons.Telegram className="socialIcon" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
