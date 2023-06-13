import Link from "next/link";

type Props = {
  href: string;
  pageName: string;
};

const NavItem = ({ href, pageName }: Props) => {
  return (
    <Link
      className="no-underline cursor-pointer text-lg font-thin"
      href={href}
      passHref
    >
      {pageName}
    </Link>
  );
};

export default NavItem;
