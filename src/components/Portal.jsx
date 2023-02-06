import { memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

function Portal({ selector, children = null }) {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(document.querySelector(selector));
  }, [selector]);

  return container ? createPortal(children, container) : null;
}

export default memo(Portal);
