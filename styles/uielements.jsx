import styled from "styled-components";

export const Layout = styled.div`
  height: 100vh;
  padding: 2rem 8rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-between;
  align-items: center;
`;
