import Link from "next/link";
import { Ufo, VulcanSalute } from "./icons";

export default function Navbar() {
  return (
    <nav className="navbarContainer">
      <div className="navbar">
        <Link href="/" passHref>
          <Ufo />
        </Link>
        <Link href="/blog" passHref>
          <a className="navItem">Blog</a>
        </Link>
        <Link href="/projects" passHref>
          <a className="navItem">Projects</a>
        </Link>
        <Link href="/about" passHref>
          <a className="navItem">About</a>
        </Link>
      </div>
      <a className="meetBtn" href="mailto: mihrilp@gmail.com">
        Let&apos;s Meet <VulcanSalute />
      </a>
    </nav>
  );
}
