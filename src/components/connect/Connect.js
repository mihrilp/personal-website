import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./connect.scss";
import * as Icons from "../icons";

const Connect = () => {
  return (
    <Container fluid className="connect">
      <Row>
        <Col></Col>
        <Col>
          <Icons.Linkedin className="socialIcon" />
        </Col>
        <Col>
          <Icons.Github className="socialIcon" />
        </Col>
        <Col>
          <Icons.Twitter className="socialIcon" />
        </Col>
        <Col>
          <Icons.Spotify className="socialIcon" />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Connect;
