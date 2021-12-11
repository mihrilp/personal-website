import Link from "next/link";
import { Hello, Ufo } from "./icons";
import styled from "styled-components";
import { Flex } from "../styles/uielements";

const Nav = styled.nav`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #5b5c63;
  cursor: pointer;
  font-size: 1.3rem;
`;

const MeetButton = styled.a`
  padding: 4rem 0;
  text-decoration: none;
  color: #ffd200;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default function Navbar() {
  return (
    <Flex>
      <Nav>
        <Link href="/" passHref>
          <Ufo />
        </Link>
        <Link href="/blog" passHref>
          <NavItem>Blog</NavItem>
        </Link>
        <Link href="/projects" passHref>
          <NavItem>Projects</NavItem>
        </Link>
        <Link href="/about" passHref>
          <NavItem>About</NavItem>
        </Link>
      </Nav>
      <MeetButton href="mailto: mihrilp@gmail.com">
        Let&apos;s Meet <Hello />
      </MeetButton>
    </Flex>
  );
}
