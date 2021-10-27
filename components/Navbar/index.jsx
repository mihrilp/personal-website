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
        <Link href="/blog">
          <a className={styles.link}>Blog</a>
        </Link>
        <Link href="/projects">
          <a className={styles.link}>Projects</a>
        </Link>
        <Link className={styles.link} href="/about">
          <a className={styles.link}>About</a>
        </Link>
      </div>
      <div className={styles.meet}>
        <a className={styles.meetButton} href="mailto: mihrilp@gmail.com">
          Let's Meet <Hello />
        </a>
      </div>
    </nav>
  );
}
