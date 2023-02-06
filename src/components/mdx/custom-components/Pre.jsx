import Code from 'src/components/mdx/Code';

import { formatLang } from 'src/helpers/mdx';

const parseBoolean = (value) => {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  return true;
};

export function Pre({
  children,
  'data-title': dataTitle = '',
  'data-lines': dataLines = '',
  'data-selected': dataSelected = '',
  'data-language': dataLanguage = '',
  'data-copy': dataCopy = 'true',
  'data-footer': dataFooter = undefined,
}) {
  const title = dataTitle;
  const lines = Number(dataLines);
  const selected = dataSelected;
  const { language } = formatLang(dataLanguage, title);
  const copy = parseBoolean(dataCopy);

  let withFooter = lines > 1;

  if (typeof dataFooter !== 'undefined') {
    withFooter = parseBoolean(dataFooter);
  }

  return (
    <Code
      withFooter={withFooter}
      withCopyButton={copy}
      lines={Number(lines)}
      selected={selected}
      language={language}
    >
      {children}
    </Code>
  );
}
