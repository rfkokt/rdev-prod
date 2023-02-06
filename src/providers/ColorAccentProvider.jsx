import { useRouter } from 'next/router';
import { useEffect } from 'react';


function ColorAccentProvider({
  defaultScheme = 'violet',
  children,
}) {
  const { pathname } = useRouter();

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', defaultScheme);

    if (pathname.includes('/work/')) {
      document.documentElement.setAttribute('data-accent', 'blue');
    }
  }, [pathname, defaultScheme]);

  return children;
}

export default ColorAccentProvider;
