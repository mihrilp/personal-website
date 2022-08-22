import Link from "next/link";

type Props = {
  href: string;
  pageName: string;
};

const NavItem = ({ href, pageName }: Props) => {
  return (
    <Link href={href} passHref>
      <a className="no-underline text-gray cursor-pointer text-lg ml-2">
        {pageName}
      </a>
    </Link>
  );
};

export default NavItem;
