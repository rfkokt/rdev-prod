import clsx from 'clsx';
import Link from 'next/link';

import {ChevronRightIcon} from 'src/components/Icons';

function SectionTitle({
                          as = 'h2',
                          title,
                          caption,
                          description,
                          button = null,
                      }) {
    const Heading = as;

    return (
        <div className={clsx('content-wrapper')}>
            <Heading
                className={clsx(
                    'text-rdev-blue-600 mb-2 block font-black',
                    'lg:mb-4',
                    'dark:text-rdev-blue-500'
                )}
            >
                {caption}
            </Heading>
            <p
                className={clsx(
                    'mb-4 text-3xl font-black text-slate-700',
                    'lg:text-4xl',
                    'dark:text-slate-200'
                )}
            >
                {title}
            </p>
            {description && (
                <p className={clsx('max-w-lg text-slate-600', 'dark:text-slate-400')}>
                    {description}
                </p>
            )}
            {button && (
                <div className={clsx('mt-4', 'md:mt-6')}>
                    <Link href={button.href} className={clsx('button button--soft')}>
                        {button.title}
                        <ChevronRightIcon className="mt-0.5 h-3 w-3"/>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default SectionTitle;
