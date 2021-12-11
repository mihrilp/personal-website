import styled from "styled-components";
import { Heart, Comment } from "./icons";

const Wrapper = styled.div`
  padding: 25px;
  border: 0.5px solid #5b5c63;
  cursor: pointer;
  border-radius: 15px;
  margin-bottom: 40px;
`;

const BlogTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: #ffd200;
`;

const DateText = styled.div`
  color: #5b5c63;
  margin-bottom: 15px;
`;

const Text = styled.p`
  margin-bottom: 45px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-bottom: 15px;
  font-size: 17px;
`;

export default function LatestPost({
  url,
  title,
  date,
  description,
  reactions,
  comments,
}) {
  return (
    <Wrapper>
      <a href={url}>
        <BlogTitle>{title}</BlogTitle>
      </a>
      <DateText>{date}</DateText>
      <Text>{description}</Text>
      <Section>
        <Heart />
        {reactions} reactions
        <Comment />
        {comments} comments
      </Section>
    </Wrapper>
  );
}
