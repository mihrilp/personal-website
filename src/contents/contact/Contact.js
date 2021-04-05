import React from "react";
import "./style.scss";
import { Container, Row, Col } from "react-bootstrap";
import * as Icons from "../../components/icons";

const Contact = () => {
  return (
    <Container className="contact">
      <Row>
        <Col className="title">Contact</Col>
      </Row>
      <Row>
        <Col md={4}>
          <Row className="socialIcons mb-5">
            <Col>
              <Icons.Instagram />
            </Col>
            <Col>
              <Icons.Linkedin />
            </Col>
            <Col>
              <Icons.Twitter />
            </Col>
            <Col>
              <Icons.Telegram />
            </Col>
          </Row>
          <Row>
            <Col>
              <Icons.Github />
            </Col>
            <Col>
              <Icons.Discord />
            </Col>
            <Col>
              <Icons.Spotify />
            </Col>
          </Row>
        </Col>
        <Col className="form" md={8}>
          <Row className="justify-content-md-center">
            <Col>
              <p>Email: </p>
            </Col>
            <Col className="email">
              <input type="text" style={{ height: 40 }} />
            </Col>
          </Row>
          <Row className="justify-content-md-center mb-10">
            <Col>
              <p>Subject: </p>
            </Col>
            <Col classname="subject">
              <input type="text" style={{ height: 40 }} />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col>
              <p>Message: </p>
            </Col>
            <Col>
              <input type="text" style={{ height: 150 }} />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="button">SEND</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
