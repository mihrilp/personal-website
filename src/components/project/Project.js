import React from "react";
import "./project.scss";
import { Container, Row, Col } from "react-bootstrap";

const Project = ({ imageUri, text }) => {
  return (
    <Container>
      <div className="thubnail">
        <img
          style={{ width: 200, height: 120 }}
          src={`./images/${imageUri}`}
          alt="image"
        />
      </div>
      <div className="statement">
        <p>{text}</p>
      </div>
    </Container>
  );
};

export default Project;
