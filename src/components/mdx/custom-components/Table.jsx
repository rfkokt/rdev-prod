import clsx from 'clsx';

export function Table({ children }) {
  return (
    <div className={clsx('mdx-table')}>
      <table>{children}</table>
    </div>
  );
}
