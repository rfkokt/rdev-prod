import slug from 'slug';

import { NpmIcon, PnpmIcon, YarnIcon } from 'src/components/Icons';
import {
  CssIcon,
  FileIcon,
  HtmlIcon,
  JavaScriptIcon,
  NpmFileIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
} from 'src/components/IconsFile';

export const getSlug = (children) => {
  if (typeof children === 'string') {
    return slug(children);
  }

  return '';
};

export const urlType = (url) => {
  if (['/', '#'].includes(url[0])) {
    return 'internal';
  }

  if (url.indexOf('mailto') === 0) {
    return 'mail';
  }

  return 'external';
};

export const formatLang = (
  lang,
  title
) => {
  let language = lang;
  let icon = <FileIcon />;

  switch (lang) {
    case 'js':
    case 'javascript':
      language = 'JavaScript';
      icon = <JavaScriptIcon />;
      break;
    case 'ts':
    case 'typescript':
      language = 'TypeScript';
      icon = <TypeScriptIcon />;
      break;
    case 'jsx':
      language = 'JavaScript React';
      icon = <ReactIcon />;
      break;
    case 'tsx':
      language = 'TypeScript React';
      icon = <ReactIcon />;
      break;
    case 'html':
      language = 'HTML';
      icon = <HtmlIcon />;
      break;
    case 'css':
      language = 'CSS';
      icon = <CssIcon />;
      break;
    case 'bash':
    case 'cmd':
      language = 'Terminal';
      break;
    case 'json':
      language = 'JSON';
      break;
    case '':
      language = 'Plain Text';
      break;
    default:
      break;
  }

  switch (title) {
    case 'tailwind.config.js':
      icon = <TailwindIcon />;
      break;
    case 'package.json':
      icon = <NpmFileIcon />;
      break;
    case 'npm':
      icon = <NpmIcon />;
      break;
    case 'pnpm':
      icon = <PnpmIcon />;
      break;
    case 'yarn':
      icon = <YarnIcon />;
      break;
    default:
      break;
  }

  return { language, icon };
};
