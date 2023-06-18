"use client";
import { useState, useEffect } from "react";
import { Cross, Telescope, Ufo, VulcanSalute } from "./icons";
import Link from "next/link";
import NavItem from "./NavItem";
import navbarItems from "../constants/navbarItems";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="flex items-center justify-between h-1/5 md:h-1/4 font-mono w-full">
      <div className="lg:basis-3/4 flex items-center justify-start">
        <Link href="/" passHref aria-label="home">
          <Ufo className="mr-4" height={50} />
        </Link>
        <h2 className="flex text-xl md:hidden">mihri.dev</h2>
        <div className="hidden md:flex gap-4">
          {navbarItems.map((item) => (
            <NavItem key={item.id} href={item.url} pageName={item.name} />
          ))}
        </div>
      </div>
      <a
        className="hidden md:flex lg:basis-1/4 items-center justify-end text-lg font-thin"
        href="mailto: mihrilp@gmail.com"
        aria-label="contact me"
      >
        Let&apos;s Meet <VulcanSalute height={40} className="pl-4" />
      </a>
      <button
        className="flex md:hidden"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="open menu"
      >
        <Telescope height={43} />
      </button>
      {/* mobile menu */}
      <div
        className={`${
          mobileMenuOpen
            ? "flex flex-col items-center h-screen w-4/6 border-l-2 border-gray border-opacity-80 absolute right-0 top-0 z-10 pt-10 bg-gradient-to-br from-darkblue to-gray shadow-lg shadow-darkblue"
            : "hidden"
        }`}
      >
        <button
          className="absolute right-5"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="close menu"
        >
          <Cross height={40} />
        </button>
        <div className="flex flex-col items-center gap-4 mt-32">
          <NavItem href="/" pageName="Home" />
          {navbarItems.map((item) => (
            <NavItem key={item.id} href={item.url} pageName={item.name} />
          ))}
          <a
            className="no-underline cursor-pointer text-lg font-thin"
            href="mailto: mihrilp@gmail.com"
            aria-label="contact me"
          >
            Let&apos;s Meet
          </a>
        </div>
      </div>
    </nav>
  );
}
