import React from "react";
import "./projects.scss";
import { Container, Row, Col } from "react-bootstrap";
import Project from "../../components/project/Project";

const Projects = ({}) => {
  return (
    <Container>
      <Row>
        <Col>
          <Project
            text="neque sint vel facilis velit cumque, omnis beatae explicabo
                  eum repellendus impedit, eligendi consequatur officia hic
                  odio! Sunt repudiandae eligendi voluptatibus."
            imageUri="image1.jpg"
          />
        </Col>
        <Col>
          <Project
            text="neque sint vel facilis velit cumque, omnis beatae explicabo
                  eum repellendus impedit, eligendi consequatur officia hic
                  odio! Sunt repudiandae eligendi voluptatibus."
            imageUri="image2.jpg"
          />
        </Col>
        <Col>
          <Project
            text="neque sint vel facilis velit cumque, omnis beatae explicabo
          eum repellendus impedit, eligendi consequatur officia hic
          odio! Sunt repudiandae eligendi voluptatibus."
            imageUri="image3.jpg"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
