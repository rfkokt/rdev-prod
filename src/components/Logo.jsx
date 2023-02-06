import clsx from 'clsx';

function Logo({ active = false }) {
  return (
    <div className={clsx('flex items-center gap-1.5 font-[1000] leading-none')}>
      <div className={clsx('-mt-1 text-xl')}>
        <span className={clsx('text-slate-900', 'dark:text-slate-200')}>
          r
        </span>
        <span className={clsx('text-rdev-blue-600', 'dark:text-rdev-blue-500')}>
          Dev
        </span>
      </div>
    </div>
  );
}

export default Logo;
