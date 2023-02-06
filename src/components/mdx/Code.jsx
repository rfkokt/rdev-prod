import clsx from 'clsx';
import { useRef, useState } from 'react';

import { ClipboardIcon } from 'src/components/Icons';

function CodeFooter({
  lines = 0,
  language = '',
  selected = '',
}) {
  return (
    <div className={clsx('mdx-code__footer')}>
      {selected && (
        <div className={clsx('mdx-code__footer-item')}>
          Selected: {selected}
        </div>
      )}
      {language && (
        <div className={clsx('mdx-code__footer-item')}>{language}</div>
      )}
      {lines && (
        <div className={clsx('mdx-code__footer-item hidden', 'sm:flex')}>
          Lines: {lines}
        </div>
      )}
      <div className={clsx('mdx-code__footer-item')}>UTF-8</div>
    </div>
  );
}

function Code({
  lines = 0,
  language = '',
  selected = '',
  withCopyButton = true,
  withFooter = true,
  children = null,
}) {
  const codeRef = useRef(null);
  const [isCopied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      const content = codeRef.current.textContent || '';
      await navigator.clipboard.writeText(content);

      if (!isCopied) {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      }
    } catch (err) {
      setCopied(false);
    }
  };

  return (
    <div className={clsx('mdx-code')}>
      {withCopyButton && (
        <button
          type="button"
          className={clsx('mdx-code__copy-button')}
          onClick={copyToClipboard}
          title="Copy to Clipboard"
          aria-label="Copy to Clipboard"
        >
          <div
            className={clsx('mdx-code__copy-button-message', [
              isCopied ? 'mdx-code__copy-button-message-copied' : '',
            ])}
          >
            Copied!
          </div>
          <ClipboardIcon />
        </button>
      )}
      <div className={clsx('mdx-code__content')}>
        <pre ref={codeRef}>{children}</pre>
      </div>
      {withFooter && (
        <CodeFooter lines={lines} selected={selected} language={language} />
      )}
    </div>
  );
}

export default Code;
