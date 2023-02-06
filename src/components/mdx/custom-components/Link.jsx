import clsx from 'clsx';
import NextLink from 'next/link';

import { ExternalLink, MailIcon } from 'src/components/Icons';

import { urlType } from 'src/helpers/mdx';

export function Link({ children, href }) {
  if (!href) {
    return <span>{children}</span>;
  }

  const type = urlType(href);

  switch (type) {
    case 'external':
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={clsx('link')}
        >
          {children}
          <ExternalLink />
        </a>
      );
    case 'mail':
      return (
        <a href={href} className={clsx('link')}>
          <MailIcon />
          {children}
        </a>
      );
    default:
      return (
        <NextLink href={href} className={clsx('link')}>
          {children}
        </NextLink>
      );
  }
}
