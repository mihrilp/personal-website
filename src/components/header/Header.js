import React from "react";
import "./header.scss";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Hello, Ufo } from "../../components/icons";

const Header = () => {
  return (
    <Container>
      <Row className="header">
        <Col md={8}>
          <ul className="navbar">
            <li>
              <NavLink className="link" to="/">
                <Ufo />
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </Col>
        <Col md={4}>
          <a className="meetButton" href="mailto: mihrilp@gmail.com">
            Let's Meet <Hello />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
