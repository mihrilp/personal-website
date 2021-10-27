import Link from "next/link";
import { Hello, Ufo } from "../icons";
import styles from "./style.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.header}>
      <div className={styles.navbar}>
        <Link href="/">
          <Ufo />
        </Link>
        <Link className={styles.link} href="/blog">
          Blog
        </Link>
        <Link className={styles.link} href="/projects">
          Projects
        </Link>
        <Link className={styles.link} href="/about">
          About
        </Link>
      </div>
      <div>
        <a className="meetButton" href="mailto: mihrilp@gmail.com">
          Let's Meet <Hello />
        </a>
      </div>
    </nav>
  );
}
