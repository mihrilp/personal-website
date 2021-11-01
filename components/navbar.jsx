import Link from "next/link";
import { Hello, Ufo } from "./icons";
import styled from "styled-components";

const Nav = styled.nav`
  margin: 90px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 25%;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #5b5c63;
  cursor: pointer;
`;

const MeetButton = styled.a`
  text-decoration: none;
  color: #ffd200;
  display: flex;
  align-items: center;
`;

export default function Navbar() {
  return (
    <Nav>
      <Row>
        <Link href="/">
          <Ufo />
        </Link>
        <Link href="/blog">
          <NavItem>Blog</NavItem>
        </Link>
        <Link href="/projects">
          <NavItem>Projects</NavItem>
        </Link>
        <Link href="/about">
          <NavItem>About</NavItem>
        </Link>
      </Row>
      <Row>
        <MeetButton href="mailto: mihrilp@gmail.com">
          Let's Meet <Hello />
        </MeetButton>
      </Row>
    </Nav>
  );
}
