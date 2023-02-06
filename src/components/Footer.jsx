import clsx from 'clsx';

import dayjs from 'src/utils/dayjs';
function Footer() {
    return (
        <footer
            className={clsx(
                'background-grid background-grid--fade-in border-divider-light mt-24 pt-16 text-sm text-slate-900',
                'dark:border-divider-dark dark:text-slate-200'
            )}
        >
            <div className={clsx('content-wrapper')}>
                <div
                    className={clsx(
                        'border-divider-light flex justify-center border-t py-6 text-xs',
                        'dark:border-divider-dark'
                    )}
                >
                    <div className={clsx('font-semibold')}>
                        &copy; {dayjs().format('YYYY')},Rifki Okta. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
