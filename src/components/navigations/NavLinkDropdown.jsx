import { Menu } from '@headlessui/react';
import clsx from 'clsx';
import { m } from 'framer-motion';
import Link from 'next/link';
import { forwardRef } from 'react';

import { ChevronRightIcon } from 'src/components/Icons';

const animation = {
  hide: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.18 } },
};

const LinkRef = forwardRef(
  ({ href, children, ...rest }, ref) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link href={href} ref={ref} {...rest}>
      {children}
    </Link>
  )
);

LinkRef.displayName = 'LinkRef';

function NavLinkDropdown({ title, items }) {
  return (
    <div className="relative">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className={clsx('nav-link nav-link--label ml-2')}>
              {title}
              <ChevronRightIcon
                className={clsx('h-3 w-3 rotate-90', [open && '-rotate-90'])}
              />
            </Menu.Button>
            {open && (
              <Menu.Items
                static
                as={m.div}
                variants={animation}
                initial="hide"
                animate="show"
                className={clsx(
                  'border-divider-light absolute top-11 z-40 flex w-40 flex-col rounded-2xl border bg-white/70 p-2 backdrop-blur',
                  'dark:border-divider-dark dark:bg-slate-900/80'
                )}
              >
                {items.map((item) => (
                  <Menu.Item key={item.href}>
                    {({ active }) => (
                      <LinkRef
                        href={item.href}
                        className={clsx('nav-link h-8 text-xs', [
                          active && 'nav-link--focus',
                        ])}
                      >
                        {item.title}
                      </LinkRef>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            )}
          </>
        )}
      </Menu>
    </div>
  );
}

export default NavLinkDropdown;
