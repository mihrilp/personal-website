import { Ufo, VulcanSalute } from "./icons";
import Link from "next/link";
import NavItem from "./NavItem";

const navbarItems = [
  {
    id: 1,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 2,
    name: "Projects",
    url: "/projects",
  },
  {
    id: 3,
    name: "About",
    url: "/about",
  },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-16 font-roboto w-full">
      <div className="basis-3/4 flex items-center justify-start">
        <Link href="/" passHref>
          <a>
            <Ufo height={50} />
          </a>
        </Link>
        {navbarItems.map((item) => (
          <NavItem key={item.id} href={item.url} pageName={item.name} />
        ))}
      </div>
      <a
        className="basis-1/4 flex items-center justify-end text-lg font-thin"
        href="mailto: mihrilp@gmail.com"
      >
        Let&apos;s Meet <VulcanSalute height={43} className="pl-4" />
      </a>
    </nav>
  );
}
