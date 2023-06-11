import Link from "next/link";

type Props = {
  href: string;
  pageName: string;
};

const NavItem = ({ href, pageName }: Props) => {
  return (
    <Link href={href} passHref>
      <a className="no-underline cursor-pointer text-lg font-thin">
        {pageName}
      </a>
    </Link>
  );
};

export default NavItem;
