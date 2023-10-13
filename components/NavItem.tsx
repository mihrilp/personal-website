import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  href: string;
  pageName: string;
};

const NavItem = ({ href, pageName }: Props) => {
  const router = useRouter();
  return (
    <Link
      className="no-underline cursor-pointer text-lg font-thin hover:font-normal"
      href={href}
      passHref
      aria-label="go to page"
    >
      {pageName}
    </Link>
  );
};

export default NavItem;
