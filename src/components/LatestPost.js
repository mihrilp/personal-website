import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/components/latestPost.scss";
import { Heart, Comment } from "./icons";

const LatestPost = ({ title, date, reactions, comments, description, url }) => {
  return (
    <Container className="latesPost">
      <a href={url}>
        <Row className="blogTitle">
          <Col>
            <p>{title}</p>
          </Col>
        </Row>
        <Row className="date">
          <Col>{date}</Col>
        </Row>
        <Row className="summary">
          <Col>
            <p>{description}</p>
          </Col>
        </Row>
        <Row className="reactions">
          <Col></Col>
          <Col className="likes">
            <Heart className="icon" />
            {reactions} reactions
          </Col>
          <Col>
            <Comment className="icon" />
            {comments} comments
          </Col>
          <Col></Col>
        </Row>
      </a>
    </Container>
  );
};

export default LatestPost;
