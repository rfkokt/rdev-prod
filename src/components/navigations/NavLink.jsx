import clsx from 'clsx';
import Link from 'next/link';
function NavLink({ title, href, icon = null }) {
  return (
    <Link href={href} className={clsx('nav-link')}>
      {title}
      {icon}
    </Link>
  );
}

export default NavLink;
