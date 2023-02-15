import clsx from "clsx";
import {m} from 'framer-motion'

const animation = {
    hide: {x: -32, opacity: 0},
    show: {
        x: 0,
        opacity: 1,
    },
};

export function Title({children}) {
    return (
        <m.div
            initial={animation.hide}
            animate={animation.show}
            transition={{delay: 0.1}}
        >
            <h1
                className={clsx(
                    'text-[2rem] font-extrabold leading-tight text-slate-700',
                    'md:text-4xl md:leading-snug',
                    'dark:text-slate-300'
                )}
            >
                {children}
            </h1>
        </m.div>
    )
}

export function SubTitle({children}) {
    return (
        <m.div
            initial={animation.hide}
            animate={animation.show}
            transition={{delay: 0.2}}
        >
            <p
                className={clsx(
                    'mb-3 block leading-relaxed text-slate-600',
                    'dark:text-slate-400'
                )}
            >
                {description}
            </p>
            <p
                className={clsx(
                    'mb-3 block leading-relaxed text-slate-600',
                    'dark:text-slate-400'
                )}
            >
                {children}
            </p>
        </m.div>
    )
}


export default {
    Title,
    SubTitle
};
