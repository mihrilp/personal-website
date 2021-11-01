import styled from "styled-components";

const Container = styled.div`
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

export default function LatestPost({ url, title }) {
  return (
    <Container>
      <a href={url}>
        <BlogTitle>{title}</BlogTitle>
      </a>
    </Container>
  );
}
