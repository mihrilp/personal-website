import { Ufo, VulcanSalute } from "./icons";
import Link from "next/link";
import NavItem from "./NavItem";
import navbarItems from "../constants/navbarItems";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-1/4 font-roboto w-full">
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
        Let&apos;s Meet <VulcanSalute height={40} className="pl-4" />
      </a>
    </nav>
  );
}
