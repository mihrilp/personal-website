import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./latestPost.scss";
import { Date, Heart, Comment } from "../icons";

const LatestPost = ({ date, likes, comments }) => {
  return (
    <Container className="blog">
      <Row className="blogTitle">
        <Col>
          <p>Javascript and React</p>
        </Col>
      </Row>
      <Row className="date">
        <Col>{date}</Col>
      </Row>
      <Row className="summary">
        <Col>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id
            ex, perspiciatis blanditiis possimus facere aspernatur quas odio
            tenetur voluptatibus cum adipisci pariatur, velit recusandae.
          </p>
        </Col>
      </Row>
      <Row className="reactions">
        <Col></Col>
        <Col className="likes">
          <Heart className="icon" />
          {likes} reactions
        </Col>
        <Col>
          <Comment className="icon" />
          {comments} comments
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default LatestPost;
