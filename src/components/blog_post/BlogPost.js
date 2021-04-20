import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./blogPost.scss";
import { Date, Heart, Comment } from "../icons";

const BlogPost = ({ date, likes, comments }) => {
  return (
    <Container className="blog">
      <Row className="blogTitle">
        <Col>
          <p>Javascript and React</p>
        </Col>
      </Row>
      <Row className="summary">
        <Col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id
          ex, perspiciatis blanditiis possimus facere aspernatur quas odio
          tenetur voluptatibus cum adipisci pariatur, velit recusandae.
          Voluptatum adipisci a laudantium maiores.
        </Col>
      </Row>
      <Row className="bottomLine">
        <Col>
          <Date className="icon" />
          {date}
        </Col>
        <Col>
          <Heart className="icon" />
          {likes}
        </Col>
        <Col>
          <Comment className="icon" />
          {comments}
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPost;
