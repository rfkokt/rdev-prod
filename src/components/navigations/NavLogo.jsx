import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from 'src/components/Logo';

function NavLogo({ href, title }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={clsx('flex h-9 items-center gap-2 rounded-xl px-2')}
      aria-label={title}
    >
      <Logo active={isActive} />
    </Link>
  );
}

export default NavLogo;
