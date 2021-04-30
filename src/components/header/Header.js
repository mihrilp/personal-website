import React from "react";
import "./header.scss";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Hello, Ufo } from "../../components/icons";

const Header = () => {
  return (
    <Container>
      <Row className="header">
        <Col md={10} className="navbar">
          <Row>
            <Col>
              <NavLink className="link" to="/">
                <Ufo />
              </NavLink>
            </Col>
            <Col>
              <NavLink className="link" to="/blog">
                Blog
              </NavLink>
            </Col>
            <Col>
              <NavLink className="link" to="/projects">
                Projects
              </NavLink>
            </Col>
            <Col>
              <NavLink className="link" to="/about">
                About
              </NavLink>
            </Col>
            <Col></Col>
          </Row>
        </Col>
        <Col md={2}>
          <a className="meetButton" href="mailto: mihrilp@gmail.com">
            Let's Meet <Hello />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
