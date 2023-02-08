import clsx from "clsx";

function CardSkeleton() {
    return (
        <div className={clsx(
            'lg:max-w-[360px]',
            'animate-pulse',
            'w-full border p-4',
            ['rounded-xl '],
            ['text-sm'],
            [
                'border-divider-light bg-white',
                'dark:border-divider-dark dark:bg-rdark',
            ]
        )}
        >
            <div className={clsx(
                ["h-4 w-32 bg-slate-700 rounded"],
                ['mb-5'],
            )}/>
            <div
                className={clsx(
                    ["h-2 bg-slate-700 rounded"],
                    ['mb-1'],
                    ['text-slate-600', 'dark:text-slate-400']
                )}
            />
            <div
                className={clsx(
                    ["h-2 bg-slate-700 rounded"],
                    ['mb-1'],
                    ['text-slate-600', 'dark:text-slate-400']
                )}
            />
            <div
                className={clsx(
                    ["h-2 bg-slate-700 rounded"],
                    ['mb-5'],
                    ['text-slate-600', 'dark:text-slate-400']
                )}
            />
            <div className={clsx(
                ["h-3 w-64 bg-slate-700 rounded"],
                ['mb-5'],
            )}/>
        </div>
    )
}

export default CardSkeleton